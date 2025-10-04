import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'John Fang',
      role: 'Web Designer',
      rating: 4,
      image: 'JF',
      text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
      bgColor: 'from-gray-700 to-gray-800'
    },
    {
      name: 'Jenny Doe',
      role: 'UX Designer',
      rating: 5,
      image: 'JD',
      text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
      bgColor: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager',
      rating: 5,
      image: 'MC',
      text: 'Amazing service! The security features give me peace of mind. The interface is intuitive and the storage capacity is exactly what our team needed.',
      bgColor: 'from-gray-700 to-gray-800'
    },
    {
      name: 'Sarah Williams',
      role: 'Software Engineer',
      rating: 4,
      image: 'SW',
      text: 'Great platform for managing our data. The search functionality is incredibly fast and the mobile app makes accessing files on the go seamless.',
      bgColor: 'from-gray-600 to-gray-700'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Testimonials</h2>

        {/* Desktop View - Show 2 cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mb-8">
          <TestimonialCard testimonial={testimonials[currentSlide]} />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between max-w-xs mx-auto md:max-w-none">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-pink-500 w-8' 
                    : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card group hover:shadow-2xl">
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar */}
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0`}>
          {testimonial.image}
        </div>

        {/* Name, Role, and Rating */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-cyan-400 text-lg sm:text-xl truncate">
            {testimonial.name}
          </h4>
          <p className="text-sm sm:text-base text-purple-400 mb-2">
            {testimonial.role}
          </p>
          
          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index < testimonial.rating 
                    ? 'bg-cyan-400 group-hover:scale-110' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  )
}

export default Testimonials