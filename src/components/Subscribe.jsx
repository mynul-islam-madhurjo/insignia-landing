import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Reset states
    setEmailError('')
    setIsSuccess(false)

    // Validation
    if (!email) {
      setEmailError('Email address is required')
      return
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address (e.g., name@example.com)')
      return
    }

    // Success
    setIsSuccess(true)
    setEmail('')
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <section id="signup" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
              Subscribe !
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              Join our newsletter to never miss any latest news.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setEmailError('')
                      setIsSuccess(false)
                    }}
                    placeholder="Enter your e-mail address here"
                    className={`w-full px-6 py-3 md:py-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      emailError 
                        ? 'ring-2 ring-red-500 focus:ring-red-500' 
                        : 'focus:ring-cyan-400'
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {emailError}
                    </p>
                  )}
                  {isSuccess && (
                    <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Successfully subscribed! Thank you for joining us.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 md:py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Join Us
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Try for Free Section */}
        <div className="border-t border-gray-800 pt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3">
                Try for free!
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Get limited 1 week free try our features!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Learn more
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe