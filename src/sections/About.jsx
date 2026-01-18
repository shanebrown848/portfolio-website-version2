import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import profile image
import profileImage from '../assets/profile/shane-brown.png'

/**
 * About Section Component
 * 
 * Personal information section with reveal animations
 * Features:
 * - Text reveal on scroll using GSAP ScrollTrigger
 * - Staggered animation for multiple elements
 * - Parallax effect on background elements
 */
const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Register ScrollTrigger if not already registered
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Create timeline for reveal animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })

    // Animate title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )

    // Animate content with stagger
    tl.fromTo(
      contentRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    // Parallax effect on image/visual element
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I spent 20 years as an electrician before I got bit by the coding bug. Started as a custodian at Diné College while studying cybersecurity at ASU. Now I manage production websites and build security tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The technical thinking from electrical work translates to code. Problem solving stays the same. The tools change.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I run Sinister Gate Designs LLC. I provide cybersecurity consulting and web development for clients who need both speed and security.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently studying Cybersecurity at Arizona State University. Working toward Security+ certification. Learning by building real projects that solve actual problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Background: Former lead singer in a metal band during high school. 20+ years as an electrician across residential, commercial, and industrial projects. Worked in data centers, hospitals, semiconductor factories, and cleanrooms. Transitioned to tech through ASU's Cybersecurity Bootcamp in 2024.
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-dark-surface rounded-lg border border-dark-accent">
                <div className="text-3xl font-bold text-accent-primary mb-2">20+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="p-6 bg-dark-surface rounded-lg border border-dark-accent">
                <div className="text-3xl font-bold text-accent-primary mb-2">ASU</div>
                <div className="text-gray-400">Cybersecurity Graduate</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Profile Image */}
          <div ref={imageRef} className="relative group">
            <div className="aspect-square bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-lg overflow-hidden border border-dark-accent relative shadow-2xl">
              {/* Profile Image */}
              <img 
                src={profileImage} 
                alt="Shane Brown - Web Developer & Cybersecurity Specialist" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent z-20"></div>
              {/* Accent border glow on hover */}
              <div className="absolute inset-0 border-2 border-accent-primary/0 group-hover:border-accent-primary/30 rounded-lg transition-all duration-300 z-30"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
