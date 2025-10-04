import React, { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor">
          <rect x="16" y="8" width="32" height="40" strokeWidth="2" rx="2"/>
          <line x1="24" y1="20" x2="40" y2="20" strokeWidth="2"/>
          <line x1="24" y1="28" x2="40" y2="28" strokeWidth="2"/>
          <line x1="24" y1="36" x2="32" y2="36" strokeWidth="2"/>
        </svg>
      ),
      title: 'Search Data',
      description: "Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
    },
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor">
          <rect x="12" y="20" width="40" height="28" strokeWidth="2" rx="2"/>
          <rect x="20" y="12" width="24" height="8" strokeWidth="2" rx="1"/>
          <circle cx="32" cy="32" r="2" fill="currentColor"/>
          <line x1="20" y1="40" x2="44" y2="40" strokeWidth="2"/>
        </svg>
      ),
      title: 'Print Out',
      description: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
    },
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor">
          <path d="M32 8 L32 24 M20 16 L32 24 L44 16" strokeWidth="2"/>
          <path d="M16 24 L16 48 C16 52 20 56 32 56 C44 56 48 52 48 48 L48 24" strokeWidth="2"/>
          <path d="M26 36 L30 40 L38 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Security Code',
      description: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Features</h2>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover group"
            >
              <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 dark:text-cyan-400 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                Learn more 
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </a>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="card min-h-[400px] flex flex-col">
            <div className="text-cyan-400 mb-6">
              {features[currentSlide].icon}
            </div>
            
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              {features[currentSlide].title}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
              {features[currentSlide].description}
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Learn more 
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-pink-500 w-8' 
                      : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-2 text-white hover:text-cyan-400 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 text-white hover:text-cyan-400 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features