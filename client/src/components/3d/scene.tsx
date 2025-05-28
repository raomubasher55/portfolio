import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const particlesRef = useRef<THREE.Points>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2, // Only use antialiasing for lower pixel ratios
      powerPreference: "high-performance", // Prefer GPU performance
      precision: "mediump" // Use medium precision for better performance
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Limit pixel ratio for better performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a glow texture for the stars using a canvas
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 128;
    glowCanvas.height = 128;
    const ctx = glowCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.4, 'rgba(255,200,200,0.6)');
    gradient.addColorStop(1, 'rgba(255,200,200,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    glowTexture.needsUpdate = true;

    // Particles - Reduce count on mobile for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMobile ? 1000 : 3000; // Reduced count for mobile devices
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position particles in a sphere
      const radius = 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Create gradient colors from primary to purple
      colors[i] = 0.5 + Math.random() * 0.5;     // R
      colors[i + 1] = 0.2 + Math.random() * 0.3;   // G
      colors[i + 2] = 1.0;                         // B

      // Random sizes for depth effect
      sizes[i / 3] = Math.random() * 0.03 + 0.01;
    }

    // Save a copy of base colors for a twinkling effect.
    const baseColors = new Float32Array(colors);

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Points material with glow texture
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04, // slightly larger size for the glow to be visible
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: glowTexture, // assign the generated glow texture
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // --- New: Shooting Star Effect ---
    // Array to hold active shooting star objects.
    const shootingStars: {
      mesh: THREE.Mesh;
      direction: THREE.Vector3;
      life: number;
    }[] = [];

    // --- End of Shooting Star setup ---

    // Mouse move handler with parallax effect - optimized with throttling
    let lastMouseMoveTime = 0;
    const mouseMoveThrottle = 16; // ~60fps

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      // Skip if too soon (throttle)
      if (now - lastMouseMoveTime < mouseMoveThrottle) return;
      lastMouseMoveTime = now;
      
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Add parallax to camera - less movement on mobile
      const parallaxStrength = isMobile ? 0.3 : 0.5;
      
      gsap.to(camera.position, {
        x: mouseRef.current.x * parallaxStrength,
        y: mouseRef.current.y * parallaxStrength,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    // Only add mouse parallax on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      timeRef.current += 0.001;

      if (particlesRef.current) {
        // Get attributes arrays
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
          // Wave motion on positions
          positions[i] += Math.sin(timeRef.current + i) * 0.002;
          positions[i + 1] += Math.cos(timeRef.current + i) * 0.002;
          positions[i + 2] += Math.sin(timeRef.current * 0.5 + i) * 0.002;

          // Breathing effect on particle sizes
          const sizeIndex = i / 3;
          sizes[sizeIndex] = (Math.sin(timeRef.current * 2 + sizeIndex) * 0.01) + 0.02;
        }

        // --- New: Add Twinkling effect to particle colors ---
        const colorAttr = particlesRef.current.geometry.attributes
          .color as THREE.BufferAttribute;
        const colorsArray = colorAttr.array as Float32Array;
        for (let i = 0; i < colorsArray.length; i += 3) {
          const flicker = 0.8 + 0.2 * Math.sin(timeRef.current * 3 + i);
          colorsArray[i] = baseColors[i] * flicker;
          colorsArray[i + 1] = baseColors[i + 1] * flicker;
          colorsArray[i + 2] = baseColors[i + 2] * flicker;
        }
        colorAttr.needsUpdate = true;
        // --- End Twinkling effect ---

        // Slow rotation of the entire particle system
        particlesRef.current.rotation.y += 0.0003;
        particlesRef.current.rotation.x += 0.0001;

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.geometry.attributes.size.needsUpdate = true;
      }

      // --- Update Shooting Stars ---
      // Randomly spawn a shooting star with a low probability (less on mobile)
      if (Math.random() < (isMobile ? 0.0005 : 0.001)) {
        // Create a small glowing shooting star (a small sphere)
        const starGeometry = new THREE.SphereGeometry(0.05, isMobile ? 4 : 8, isMobile ? 4 : 8);
        const starMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          blending: THREE.AdditiveBlending,
        });
        const shootingStar = new THREE.Mesh(starGeometry, starMaterial);

        // Randomly choose to start from the top or right edge
        let startPos = new THREE.Vector3();
        const direction = new THREE.Vector3();
        if (Math.random() < 0.5) {
          // Top edge
          startPos.x = (Math.random() - 0.5) * 10;
          startPos.y = 5;
          startPos.z = (Math.random() - 0.5) * 10;
          direction.x = (Math.random() - 0.5) * 0.5;
          direction.y = -1;
          direction.z = (Math.random() - 0.5) * 0.5;
        } else {
          // Right edge
          startPos.x = 5;
          startPos.y = (Math.random() - 0.5) * 10;
          startPos.z = (Math.random() - 0.5) * 10;
          direction.x = -1;
          direction.y = (Math.random() - 0.5) * 0.5;
          direction.z = (Math.random() - 0.5) * 0.5;
        }
        shootingStar.position.copy(startPos);
        direction.normalize();

        // Set a life duration (in seconds) for the shooting star
        const lifeDuration = 1.5;
        shootingStars.push({ mesh: shootingStar, direction, life: lifeDuration });
        scene.add(shootingStar);
      }

      // Update each shooting star's position and fade it out
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        const speed = 0.1; // Adjust speed as desired
        ss.mesh.position.addScaledVector(ss.direction, speed);
        // Decrease life assuming approx. 60 FPS (~0.016 per frame)
        ss.life -= 0.016;
        if (ss.life <= 0) {
          scene.remove(ss.mesh);
          shootingStars.splice(i, 1);
        } else {
          // Fade out effect as life decreases
          (ss.mesh.material as THREE.MeshBasicMaterial).opacity = ss.life / 1.5;
        }
      }
      // --- End Shooting Star Update ---

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Only remove if it was added
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(frame);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}