import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Hero Section Component
 * 
 * The main landing section with animated introduction
 * Features:
 * - Staggered text reveal animations using GSAP
 * - Gradient text effects
 * - Smooth fade-in animations
 * - Call-to-action button with hover effects
 */
const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const roleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Animate title with word stagger (preserving line breaks)
    if (titleRef.current) {
      const titleSpans = titleRef.current.querySelectorAll('span')
      if (titleSpans.length > 0) {
        // Animate each line separately
        titleSpans.forEach((span, index) => {
          const words = span.textContent.split(' ')
          span.innerHTML = words
            .map((word, i) => `<span class="inline-block" style="opacity: 0">${word}${i < words.length - 1 ? '&nbsp;' : ''}</span>`)
            .join('')
        })
        
        // Animate all word spans
        const wordSpans = titleRef.current.querySelectorAll('span span')
        gsap.to(wordSpans, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.5,
        })
      } else {
        // Fallback: character animation if structure is different
        const titleChars = titleRef.current?.textContent?.split('') || []
        titleRef.current.innerHTML = titleChars
          .map((char, i) => `<span class="inline-block" style="opacity: 0">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('')
        
        gsap.to(titleRef.current.querySelectorAll('span'), {
          opacity: 1,
          duration: 0.5,
          stagger: 0.03,
          delay: 0.5,
        })
      }
    }

    // Animate other elements
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center section-padding relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtitle - appears first */}
        <p
          ref={subtitleRef}
          className="text-accent-primary font-mono text-sm md:text-base mb-4 opacity-0"
        >
          &lt; Shane Brown /&gt;
        </p>

        {/* Main Title with gradient */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-gradient">Web Developer &nbsp;&</span>
          <span className="block text-gradient">Cybersecurity Specialist</span>
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed opacity-0"
        >
          From wiring buildings to writing code. I build secure websites and develop AI tools that solve real problems.
        </p>
        
        {/* Current Role & Location */}
        <div className="text-sm md:text-base text-gray-500 mb-12 opacity-0" ref={roleRef}>
          <p>Web Developer at Diné College, IT & Marketing Department</p>
          <p className="mt-1">Sinister Gate Designs LLC • Tsaile, Arizona</p>
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="opacity-0">
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
          >
            View My Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
