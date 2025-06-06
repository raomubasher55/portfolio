import * as React from "react"

// Breakpoints aligned with Tailwind's defaults
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.md - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.md)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < BREAKPOINTS.md)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isMatched, setIsMatched] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`)
    const onChange = () => {
      setIsMatched(mql.matches)
    }
    mql.addEventListener("change", onChange)
    setIsMatched(mql.matches)
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isMatched
}
