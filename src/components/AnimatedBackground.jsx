import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * AnimatedBackground Component
 * 
 * Creates an animated particle/neural network background using Three.js
 * Features:
 * - Interactive particles that respond to mouse movement
 * - Neural network-like connections between nearby particles
 * - Smooth animations optimized for 60fps
 * - Performance optimized with efficient rendering
 */
const AnimatedBackground = () => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup - using perspective camera for 3D effect
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    )
    camera.position.z = 1000

    // Renderer setup - WebGL renderer for hardware acceleration
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Transparent background
      antialias: true, // Smooth edges
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for performance
    mountRef.current.appendChild(renderer.domElement)

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry()
    // Reduce particles on mobile for better performance
    const isMobile = window.innerWidth < 768
    const particlesCount = isMobile ? 75 : 150 // Number of particles (adjust for performance)
    const positions = new Float32Array(particlesCount * 3) // x, y, z for each particle
    const velocities = new Float32Array(particlesCount * 3) // Velocity for each particle

    // Initialize particles with random positions and velocities
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000 // x
      positions[i + 1] = (Math.random() - 0.5) * 2000 // y
      positions[i + 2] = (Math.random() - 0.5) * 2000 // z
      
      velocities[i] = (Math.random() - 0.5) * 0.5 // x velocity
      velocities[i + 1] = (Math.random() - 0.5) * 0.5 // y velocity
      velocities[i + 2] = (Math.random() - 0.5) * 0.5 // z velocity
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Particle material - glowing points
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ff88, // Accent primary color
      size: 2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // Makes particles glow
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Line system for neural network connections
    const lineGeometry = new THREE.BufferGeometry()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.2,
    })

    // Mouse move handler for interactive effects
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop - runs at 60fps
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Update particle positions
      const positions = particlesGeometry.attributes.position.array
      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Update position based on velocity
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Boundary check - wrap around if particles go too far
        if (Math.abs(positions[i]) > 1000) velocities[i] *= -1
        if (Math.abs(positions[i + 1]) > 1000) velocities[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 1000) velocities[i + 2] *= -1

        // Mouse interaction - particles slightly attracted to mouse
        const dx = mouseRef.current.x * 500 - positions[i]
        const dy = mouseRef.current.y * 500 - positions[i + 1]
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 300) {
          velocities[i] += dx * 0.0001
          velocities[i + 1] += dy * 0.0001
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true

      // Rotate camera slightly for dynamic effect
      camera.position.x += (mouseRef.current.x * 50 - camera.position.x) * 0.01
      camera.position.y += (mouseRef.current.y * 50 - camera.position.y) * 0.01
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default AnimatedBackground
