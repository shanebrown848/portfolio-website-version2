import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import project images
import dineCollegeImage from '../assets/projects/cropped-dc_logoFooter.png'
import securityTrophyImage from '../assets/projects/Security-Trophy.png'
import networkingTrophyImage from '../assets/projects/Networking-Trophy.png'
import databaseTrophyImage from '../assets/projects/Database-Trophy.png'
import campusMapImage from '../assets/projects/3d-Tsaile-Campus-Map.png'
import aiScannerImage from '../assets/projects/AI-Project-Scanner-img.png'

/**
 * Projects Section Component
 * 
 * Showcase of portfolio projects with hover effects
 * Features:
 * - Grid layout with hover animations
 * - Image lazy loading for performance
 * - Smooth reveal animations on scroll
 * - Interactive hover effects with GSAP
 */
const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)
  
  const projects = [
    {
      id: 1,
      title: 'Diné College Website Management',
      description: 'Manage dinecollege.edu as Web Developer in IT & Marketing. Rebuilt all widgets after WordPress core update broke functionality. Audited and fixed 50+ pages. Redesigned Student Activities page with interactive elements. Built Alumni and donation flow pages. Created IRB and institutional pages. Configured Google Analytics tracking. Generated marketing analytics reports. Managed live streaming setup using YOLOBox for campus events.',
      tags: ['WordPress', 'Elementor Pro', 'Custom CSS/JS', 'Google Analytics', 'YOLOBox'],
      status: 'Production (2024-Present)',
      link: 'https://dinecollege.edu',
      image: dineCollegeImage,
    },
    {
      id: 2,
      title: 'AWS Cloud Security Portfolio',
      description: 'Built security-focused AWS projects demonstrating threat detection, encryption, and monitoring. Designed least-privilege IAM policies. Implemented AWS KMS for data encryption. Encrypted DynamoDB tables with customer-managed keys. Migrated hardcoded credentials to AWS Secrets Manager. Configured AWS GuardDuty for threat monitoring. Built CloudTrail + CloudWatch + SNS alert pipeline for real-time security event notifications.',
      tags: ['AWS', 'IAM', 'KMS', 'Secrets Manager', 'GuardDuty', 'CloudTrail', 'CloudWatch', 'SNS', 'DynamoDB', 'Python'],
      status: 'Complete',
      link: 'https://github.com/shanebrown848/AWS-cloud-security-portfolio',
      image: securityTrophyImage,
    },
    {
      id: 3,
      title: 'AWS Networking Projects Portfolio',
      description: 'Built complete AWS networking portfolio demonstrating enterprise-level cloud architecture. Designed and deployed custom VPC environments with public and private subnets. Configured route tables, Internet Gateways, and NAT. Established VPC Peering connections between isolated networks. Created VPC Endpoints for secure S3 access. Enabled VPC Flow Logs for traffic analysis. Used CloudWatch Logs Insights for security investigation. Provisioned EC2 instances with proper security configurations.',
      tags: ['AWS', 'VPC', 'EC2', 'S3', 'CloudWatch', 'VPC Peering', 'VPC Endpoints', 'Security Groups', 'Network ACLs', 'CIDR'],
      status: 'Complete',
      link: 'https://github.com/shanebrown848/AWS-Networking-Projects-Portfolio',
      image: networkingTrophyImage,
    },
    {
      id: 4,
      title: 'AWS Databases Portfolio',
      description: 'Built relational and NoSQL database solutions integrated with cloud applications. Deployed managed Aurora MySQL databases connected to EC2 instances. Built PHP web application with Aurora backend. Created DynamoDB tables with proper capacity planning. Loaded and queried data using AWS CLI. Implemented DynamoDB transactions. Configured database security groups and secure authentication.',
      tags: ['AWS', 'Aurora MySQL', 'DynamoDB', 'EC2', 'PHP', 'SQL', 'NoSQL', 'AWS CLI'],
      status: 'Complete',
      link: 'https://github.com/shanebrown848/AWS-databases-portfolio',
      image: databaseTrophyImage,
    },
    {
      id: 5,
      title: 'Interactive 3D Campus Maps',
      description: 'Building 3D rendered campus maps for Diné College graduation event (December 12th). Creating interactive hotspots with clickable navigation. Collaborating with professional photographers and drone pilots for 3D assets. Implementing GSAP animations for smooth user interactions.',
      tags: ['GSAP', 'Three.js', 'JavaScript', 'React'],
      status: 'In Progress',
      link: 'https://marketingteamdinecollege.com/',
      image: campusMapImage,
    },
    {
      id: 6,
      title: 'AI Security Scanner',
      description: 'Built threat detection tool powered by Gemini AI. Automates vulnerability identification. Integrates security awareness into development workflow. Designed for small businesses needing automated security assessments.',
      tags: ['Gemini AI', 'Python', 'OpenAI API'],
      status: 'Active Development',
      link: 'https://github.com/shanebrown848/AI-Security-Scanner-with-Gemini',
      image: aiScannerImage,
    },
    {
      id: 7,
      title: 'CyberSentinel AI',
      description: 'Developed AI-powered SOC assistant for threat analysis. Created automated incident response workflows. Provides real-time security recommendations for network defense.',
      tags: ['OpenAI API', 'Python', 'SIEM'],
      status: 'Active Development',
      // Using external URL as placeholder - replace with imported image when available
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    },
    {
      id: 8,
      title: 'TheEchoedMelodies.com',
      description: 'Music review site covering underground metal. Personal project combining web development skills with music journalism. Features album reviews, band interviews, and scene coverage.',
      tags: ['WordPress', 'Custom Theme Development'],
      status: 'Active',
      link: 'https://theechoedmelodies.com',
      // Using external URL as placeholder - replace with imported image when available
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    },
    {
      id: 9,
      title: 'Client Web Development Projects',
      description: 'Building secure, fast websites for multiple clients including LW Safety, Alumni site rebuilds, Dre Creations, and Nest of Tucson. Focus on responsive design, performance optimization, and security best practices.',
      tags: ['WordPress', 'Elementor', 'React', 'JavaScript', 'Custom CSS/JS'],
      status: 'Ongoing',
      // Using external URL as placeholder - replace with imported image when available
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      id: 10,
      title: 'DevOps Capstone Project',
      description: 'Completed capstone demonstrating full DevOps workflow including CI/CD pipelines, containerization, and cloud deployment.',
      tags: ['Python', 'Docker', 'CI/CD'],
      status: 'Complete',
      link: 'https://github.com/shanebrown848/devops-capstone-project',
      // Using external URL as placeholder - replace with imported image when available
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    },
  ]

  useEffect(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate projects on scroll
    const projectCards = projectsRef.current?.querySelectorAll('.project-card') || []
    
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Hover animations for each card
    projectCards.forEach((card) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-dark-surface rounded-lg overflow-hidden border border-dark-accent hover:border-accent-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-accent-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="ml-2 px-2 py-1 text-xs bg-dark-accent text-gray-400 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-dark-accent text-accent-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent-primary hover:text-accent-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.link.includes('github.com') ? 'View on GitHub →' : 'Visit Site →'}
                    </a>
                  )}
                  {project.client && (
                    <span className="text-xs text-gray-500">Client: {project.client}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
