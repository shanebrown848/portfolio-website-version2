import { useEffect, useRef } from 'react'

/**
 * CustomCursor Component
 * 
 * Creates a custom cursor that follows the mouse with smooth animations
 * Features:
 * - Smooth following animation
 * - Scale effect on hover over interactive elements
 * - Gradient ring effect
 * - Performance optimized with requestAnimationFrame
 */
const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const cursorRefPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show custom cursor on desktop (not mobile/touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      return // Don't initialize custom cursor on touch devices
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Smooth cursor animation using requestAnimationFrame
    let animationFrameId
    const animateCursor = () => {
      // Smooth interpolation for cursor position
      cursorRefPosition.current.x += (mouseRef.current.x - cursorRefPosition.current.x) * 0.1
      cursorRefPosition.current.y += (mouseRef.current.y - cursorRefPosition.current.y) * 0.1

      if (cursorRef.current && cursorRingRef.current) {
        cursorRef.current.style.left = `${cursorRefPosition.current.x}px`
        cursorRef.current.style.top = `${cursorRefPosition.current.y}px`
        
        cursorRingRef.current.style.left = `${mouseRef.current.x}px`
        cursorRingRef.current.style.top = `${mouseRef.current.y}px`
      }

      animationFrameId = requestAnimationFrame(animateCursor)
    }
    animateCursor()

    // Handle hover effects on interactive elements
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)'
      }
    }

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      if (!isTouchDevice) {
        document.body.style.cursor = 'auto'
      }
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot - hidden on mobile */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-accent-primary mix-blend-difference transition-transform duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      
      {/* Cursor ring with gradient - hidden on mobile */}
      <div
        ref={cursorRingRef}
        className="hidden md:block fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-accent-primary/30 transition-all duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  )
}

export default CustomCursor
