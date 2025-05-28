import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./client/src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'spin-in': 'spinIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'slide-in-spring': 'slideSpring 0.4s cubic-bezier(.25,.1,.25,1.5)',
  			bounce: 'bounce 2s infinite',
  			'gradient-flow': 'gradientFlow 2s linear infinite',
  			float: 'float 3s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			spinIn: {
  				'0%': {
  					transform: 'rotate(180deg) scale(0)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			slideSpring: {
  				'0%': {
  					transform: 'translateX(-30px) rotate(-10deg)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0) rotate(0deg)',
  					opacity: '1'
  				}
  			},
  			gradientFlow: {
  				'0%': {
  					'background-position': '100% 50%'
  				},
  				'100%': {
  					'background-position': '-100% 50%'
  				}
  			}
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  				'6': 'hsl(var(--chart-6))',
  				'7': 'hsl(var(--chart-7))',
  				'8': 'hsl(var(--chart-8))',
  				'9': 'hsl(var(--chart-9))',
  				'10': 'hsl(var(--chart-10))',
  				'11': 'hsl(var(--chart-11))',
  				'12': 'hsl(var(--chart-12))',
  				'13': 'hsl(var(--chart-13))',
  				'14': 'hsl(var(--chart-14))',
  				'15': 'hsl(var(--chart-15))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Montserrat',
  				'sans-serif'
  			],
  			serif: [
  				'Poppins',
  				'serif'
  			],
  			display: [
  				'Montserrat',
  				'sans-serif'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
