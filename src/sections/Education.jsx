import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Education & Certifications Section Component
 * 
 * Education history and certifications with reveal animations
 * Features:
 * - Education timeline
 * - Certification badges
 * - Scroll-triggered animations
 */
const Education = () => {
  const sectionRef = useRef(null)
  const educationRef = useRef(null)
  const certificationsRef = useRef(null)

  const education = [
    {
      id: 1,
      degree: 'Cybersecurity',
      institution: 'Arizona State University',
      status: 'Current',
      year: '2024 - Present',
    },
    {
      id: 2,
      degree: 'Cybersecurity Bootcamp',
      institution: 'Arizona State University',
      status: 'Completed',
      year: '2024',
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'Chinle High School',
      status: 'Completed',
      year: '2002',
    },
  ]

  const certifications = [
    {
      id: 1,
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera',
      year: '2025',
    },
    {
      id: 2,
      name: 'Cisco Cybersecurity Pathway',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 3,
      name: 'Cisco Cyber Threat Management',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 4,
      name: 'Cisco Network Defense',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 5,
      name: 'Cisco Ethical Hacking',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 6,
      name: 'Cisco JavaScript Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 7,
      name: 'Cisco Python Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 8,
      name: 'Cisco Endpoint Security',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 9,
      name: 'Cisco Networking Basics',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 10,
      name: 'Cisco Data Analytics Essentials',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 11,
      name: 'Cisco Operating Systems Basics',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 12,
      name: 'Cisco Computer Hardware Basics',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 13,
      name: 'Cisco Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 14,
      name: 'Cisco Introduction to Modern AI',
      issuer: 'Cisco',
      year: '2025',
    },
    {
      id: 15,
      name: 'Cisco Introduction to Data Science',
      issuer: 'Cisco',
      year: '2025',
    },
  ]

  useEffect(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate education items
    const educationItems = educationRef.current?.querySelectorAll('.education-item') || []
    const certItems = certificationsRef.current?.querySelectorAll('.cert-item') || []
    
    gsap.fromTo(
      [...educationItems, ...certItems],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Education & Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent-primary">Education</h3>
            <div ref={educationRef} className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="education-item bg-dark-surface p-6 rounded-lg border border-dark-accent"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-300">{edu.degree}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      edu.status === 'Current' 
                        ? 'bg-accent-primary/20 text-accent-primary' 
                        : 'bg-gray-600/20 text-gray-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500 font-mono">{edu.year}</p>
                </div>
              ))}
              
              {/* In Progress */}
              <div className="bg-dark-surface p-6 rounded-lg border border-dark-accent border-accent-primary/30">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">
                  Currently Working Toward
                </h4>
                <p className="text-accent-primary font-semibold">CompTIA Security+ Certification</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent-primary">Certifications</h3>
            <div ref={certificationsRef} className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-item bg-dark-surface p-4 rounded-lg border border-dark-accent"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono ml-4">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
