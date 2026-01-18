import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Skills Section Component
 * 
 * Displays technical skills with visual progress indicators
 * Features:
 * - Animated progress bars on scroll
 * - Skill categories with icons
 * - Staggered reveal animations
 */
const Skills = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)

  // Skills data with proficiency levels (0-100)
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS (VPC, EC2, IAM, S3)', level: 85 },
        { name: 'CloudWatch, KMS, Secrets Manager', level: 80 },
        { name: 'GuardDuty, CloudTrail, SNS', level: 80 },
        { name: 'Aurora, DynamoDB', level: 75 },
        { name: 'Azure, Oracle Cloud', level: 70 },
        { name: 'VPC Peering, VPC Endpoints', level: 80 },
        { name: 'VPC Flow Logs, AWS CLI', level: 85 },
        { name: 'CloudShell', level: 80 },
      ],
    },
    {
      category: 'Networking',
      skills: [
        { name: 'CIDR Notation', level: 85 },
        { name: 'Route Tables, Internet Gateways', level: 85 },
        { name: 'NAT, Security Groups', level: 85 },
        { name: 'Network ACLs', level: 80 },
        { name: 'Traffic Routing', level: 80 },
        { name: 'Network Isolation', level: 80 },
        { name: 'Multi-VPC Architecture', level: 75 },
        { name: 'Cisco Networking Fundamentals', level: 70 },
      ],
    },
    {
      category: 'Security & Penetration Testing',
      skills: [
        { name: 'IAM Policy Design', level: 85 },
        { name: 'Least-Privilege Enforcement', level: 85 },
        { name: 'AWS KMS Encryption', level: 80 },
        { name: 'Secrets Management', level: 85 },
        { name: 'Threat Detection', level: 80 },
        { name: 'Security Monitoring', level: 80 },
        { name: 'Defense in Depth', level: 80 },
        { name: 'Kali Linux, Parrot OS', level: 75 },
        { name: 'Wireshark, Nmap, Burp Suite', level: 75 },
        { name: 'Splunk, Nessus', level: 70 },
        { name: 'IDS, Vulnerability Assessment', level: 75 },
        { name: 'Risk Management', level: 80 },
        { name: 'Firewall Configuration', level: 80 },
        { name: 'Endpoint Security', level: 75 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'Amazon Aurora (MySQL)', level: 80 },
        { name: 'DynamoDB', level: 75 },
        { name: 'NoSQL Data Modeling', level: 75 },
        { name: 'Query Optimization', level: 80 },
        { name: 'Database-to-Application Integration', level: 80 },
        { name: 'Partition Keys, Sort Keys', level: 75 },
        { name: 'Database Transactions', level: 80 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      category: 'Development & Programming',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bash', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Astro.js', level: 70 },
        { name: 'Vite', level: 85 },
        { name: 'GSAP', level: 80 },
        { name: 'Three.js', level: 75 },
        { name: '.NET Blazor', level: 70 },
      ],
    },
    {
      category: 'Web & CMS',
      skills: [
        { name: 'WordPress', level: 90 },
        { name: 'Elementor Pro', level: 85 },
        { name: 'Custom CSS/JS Integration', level: 90 },
        { name: 'Google Analytics', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Performance Optimization', level: 85 },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'OpenAI API', level: 80 },
        { name: 'Gemini AI', level: 75 },
        { name: 'Prompt Engineering', level: 80 },
        { name: 'AI Chatbot Development', level: 75 },
        { name: 'Web Scraping', level: 70 },
        { name: 'Automation Scripting', level: 80 },
        { name: 'AI-Driven Security Automation', level: 75 },
      ],
    },
    {
      category: 'Tools & Workflows',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VSCode', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'Linux Command Line', level: 85 },
        { name: 'SSH', level: 85 },
        { name: 'VirtualBox', level: 75 },
        { name: 'Docker', level: 75 },
        { name: 'Markdown', level: 90 },
        { name: 'Technical Documentation', level: 85 },
        { name: 'YOLOBox (Live Streaming)', level: 80 },
      ],
    },
  ]

  useEffect(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate skill bars on scroll
    const skillBars = skillsRef.current?.querySelectorAll('.skill-bar-fill') || []

    skillBars.forEach((bar) => {
      const level = bar.getAttribute('data-level')
      
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(bar, {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power2.out',
          })
        },
      })
    })

    // Animate skill cards
    const skillCards = skillsRef.current?.querySelectorAll('.skill-category') || []
    
    gsap.fromTo(
      skillCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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
      id="skills"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Technologies I work with
        </p>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category bg-dark-surface p-6 rounded-lg border border-dark-accent"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent-primary">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-accent-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-accent rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
