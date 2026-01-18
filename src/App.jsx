import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import AnimatedBackground from './components/AnimatedBackground'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  useEffect(() => {
    // Enhanced smooth scroll behavior
    // This creates a smooth scrolling effect using GSAP's ScrollToPlugin
    // Better than CSS smooth-scroll for more control
    
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: 80 },
            ease: 'power2.inOut',
          })
        }
      }
    }

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick)
    })

    // Set up global scroll animations with parallax effect
    gsap.utils.toArray('.fade-in-section').forEach((section) => {
      // Fade in animation
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Subtle parallax effect on sections
      gsap.to(section, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    // Cleanup function
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick)
      })
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Three.js Background */}
      <AnimatedBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
