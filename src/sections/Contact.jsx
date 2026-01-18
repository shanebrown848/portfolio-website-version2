import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Contact Section Component
 * 
 * Contact form with validation
 * Features:
 * - Form validation with error messages
 * - Smooth animations on scroll
 * - Success/error states
 * - Accessible form inputs
 */
const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate form on scroll
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  // Validation function
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call - replace with actual endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding fade-in-section relative"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Available for web development and cybersecurity consulting projects.
        </p>
        <p className="text-center text-sm text-gray-500 mb-12">
          Web Developer at Diné College, IT & Marketing Department • Sinister Gate Designs LLC
        </p>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-dark-surface p-8 rounded-lg border border-dark-accent space-y-6"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-dark-accent focus:border-accent-primary focus:ring-accent-primary'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-dark-accent focus:border-accent-primary focus:ring-accent-primary'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-dark-accent focus:border-accent-primary focus:ring-accent-primary'
              }`}
              placeholder="Tell me about your project..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
              Something went wrong. Please try again later.
            </div>
          )}
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center space-y-6">
          <p className="text-gray-400">Get in touch:</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-dark-surface p-6 rounded-lg border border-dark-accent">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Contact</h3>
              <div className="space-y-2 text-left">
                <p>
                  <a
                    href="mailto:shanebrown848@gmail.com"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors"
                  >
                    shanebrown848@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:9287248038"
                    className="text-gray-300 hover:text-accent-primary transition-colors"
                  >
                    (928) 724-8038
                  </a>
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  P.O. Box A046<br />
                  Tsaile, AZ 86556
                </p>
              </div>
            </div>

            <div className="bg-dark-surface p-6 rounded-lg border border-dark-accent">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Links</h3>
              <div className="space-y-2 text-left">
                <p>
                  <a
                    href="https://github.com/shanebrown848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors"
                  >
                    GitHub
                  </a>
                </p>
           
                <p>
                  <a
                    href="https://sinistergatedesigns.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors"
                  >
                    Sinister Gate Designs
                  </a>
                </p>
                <p>
                  <a
                    href="https://theechoedmelodies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors"
                  >
                    The Echoed Melodies
                  </a>
                </p>
                <p>
                  <a
                    href="https://credly.com/users/shane-brown.1b5cce34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors"
                  >
                    Credly Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
