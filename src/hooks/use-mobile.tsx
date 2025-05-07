import * as React from "react"

// Breakpoints padronizados
export const BREAKPOINTS = {
  xxs: 280, // Extra extra pequeno (celulares muito pequenos)
  xs: 320, // Extra pequeno (celulares pequenos)
  sm: 480, // Pequeno (celulares maiores)
  md: 768, // Médio (tablets)
  lg: 1024, // Grande (desktop pequeno)
  xl: 1280, // Extra grande (desktop)
  xxl: 1536 // Extra extra grande (desktop grande)
}

// Hook original para verificar se é mobile
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

// Hook para verificar tamanho de tela específico
export function useBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isBelow, setIsBelow] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`)
    const onChange = () => {
      setIsBelow(window.innerWidth < BREAKPOINTS[breakpoint])
    }
    mql.addEventListener("change", onChange)
    setIsBelow(window.innerWidth < BREAKPOINTS[breakpoint])
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isBelow
}

// Hook para obter o breakpoint atual
export function useCurrentBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState<keyof typeof BREAKPOINTS | undefined>(undefined)

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < BREAKPOINTS.xxs) return setCurrentBreakpoint('xxs')
      if (width < BREAKPOINTS.xs) return setCurrentBreakpoint('xs')
      if (width < BREAKPOINTS.sm) return setCurrentBreakpoint('sm')
      if (width < BREAKPOINTS.md) return setCurrentBreakpoint('md')
      if (width < BREAKPOINTS.lg) return setCurrentBreakpoint('lg')
      if (width < BREAKPOINTS.xl) return setCurrentBreakpoint('xl')
      return setCurrentBreakpoint('xxl')
    }

    window.addEventListener('resize', updateBreakpoint)
    updateBreakpoint()
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return currentBreakpoint
}
