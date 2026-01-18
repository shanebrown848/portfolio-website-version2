import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Experience Section Component
 * 
 * Work experience timeline with reveal animations
 * Features:
 * - Chronological work history
 * - Scroll-triggered animations
 * - Professional formatting
 */
const Experience = () => {
  const sectionRef = useRef(null)
  const experiencesRef = useRef(null)

  const experiences = [
    {
      id: 1,
      position: 'Web Developer',
      company: 'Diné College, IT & Marketing Department',
      location: 'Tsaile, Arizona',
      dates: '2024 - Present',
      responsibilities: [
        'Manage dinecollege.edu and institutional websites',
        'Rebuild and maintain 50+ pages after WordPress core updates',
        'Design interactive pages for Student Activities, Alumni, and donations',
        'Configure Google Analytics tracking and generate marketing reports',
        'Provide technical and media support for live campus events',
        'Collaborate across departments to deliver web solutions',
        'Create formal documentation for performance reviews and impact reports',
      ],
    },
    {
      id: 2,
      position: 'Freelance IT Support & Cybersecurity Consultant',
      company: 'Sinister Gate Designs LLC',
      location: 'Tsaile, Arizona',
      dates: '2024 - Present',
      responsibilities: [
        'Provide cybersecurity assessments for small businesses',
        'Conduct vulnerability assessments using Nessus and Wireshark',
        'Develop AI-driven security automation tools',
        'Implement firewall configurations and endpoint security',
        'Design and deploy secure websites with best security practices',
        'Develop AI chatbots using OpenAI API',
        'Build client websites for multiple industries',
        'Apply SIEM tools and Python automation for security operations',
      ],
    },
    {
      id: 3,
      position: 'Electrician',
      company: 'Union Hall Local 401',
      location: 'Reno, Nevada',
      dates: '2019 - 2023',
      responsibilities: [
        'Troubleshoot and repair electrical systems for data centers',
        'Minimize operational downtime through efficient problem solving',
        'Collaborate with multidisciplinary teams on infrastructure projects',
        'Manage electrical tools and technologies for project execution',
      ],
    },
    {
      id: 4,
      position: 'Journeyman Electrician & QA Specialist',
      company: 'Various',
      location: 'Various',
      dates: '2014 - 2019',
      responsibilities: [
        'Set up IT-related electrical systems in cleanrooms and commercial settings',
        'Conduct QA/QC inspections for technical specification compliance',
        'Provide mentorship and technical guidance to junior team members',
      ],
    },
    {
      id: 5,
      position: 'Apprentice to Journeyman Electrician',
      company: 'Various',
      location: 'Various',
      dates: '2002 - 2013',
      responsibilities: [
        'Trained in residential, industrial, and commercial electrical work',
        'Worked in clean spaces with strict safety and hygiene standards',
        'Performed electrical work in hospitals and semiconductor factories',
        'Developed expertise in troubleshooting complex electrical systems',
        'Ensured electrical code compliance and safety procedures',
      ],
    },
  ]

  useEffect(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate experience cards on scroll
    const experienceCards = experiencesRef.current?.querySelectorAll('.experience-card') || []
    
    gsap.fromTo(
      experienceCards,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="experience"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Work Experience</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Professional journey from electrician to developer
        </p>

        {/* Experience Timeline */}
        <div ref={experiencesRef} className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card bg-dark-surface p-6 md:p-8 rounded-lg border border-dark-accent"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-accent-primary mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
                <div className="text-sm md:text-base text-gray-400 font-mono">
                  {exp.dates}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm md:text-base flex items-start"
                  >
                    <span className="text-accent-primary mr-2 mt-1.5">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
