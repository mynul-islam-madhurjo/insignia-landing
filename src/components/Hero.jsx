import React from 'react'

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-transparent">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse dark:opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-400 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-cyan-600 dark:text-cyan-400">Save your data</span>
              <br />
              <span className="text-cyan-600 dark:text-cyan-400">storage here.</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Insignia is a data storage area that has been tested for security, 
              so you can store your data here safely but not be afraid of being 
              stolen by others.
            </p>

            <div className="pt-4">
              <button className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-8 py-3 rounded-lg transition-all duration-300 font-medium text-gray-800 dark:text-white shadow-lg hover:shadow-xl">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center md:justify-end z-10">
            <svg 
              className="w-full max-w-md lg:max-w-lg" 
              viewBox="0 0 400 400" 
              fill="none"
            >
              {/* Cloud */}
              <g className="animate-pulse animation-delay-200">
                <ellipse cx="200" cy="80" rx="40" ry="25" fill="#A5B4FC" opacity="0.8"/>
                <ellipse cx="230" cy="75" rx="35" ry="25" fill="#C7D2FE" opacity="0.9"/>
                <ellipse cx="260" cy="80" rx="30" ry="20" fill="#A5B4FC" opacity="0.8"/>
              </g>

              {/* Server Towers */}
              <g>
                {/* Server 1 */}
                <g transform="translate(50, 120)">
                  <rect x="0" y="0" width="80" height="120" fill="#4B5563" rx="4"/>
                  <rect x="0" y="0" width="80" height="10" fill="#8B5CF6" rx="4"/>
                  <circle cx="15" cy="30" r="8" fill="#374151"/>
                  <circle cx="15" cy="50" r="8" fill="#374151"/>
                  <circle cx="15" cy="70" r="8" fill="#374151"/>
                  <rect x="30" y="25" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="45" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="65" width="40" height="3" fill="#6B7280"/>
                  {/* Glow effect */}
                  <rect x="0" y="0" width="80" height="120" fill="url(#serverGlow1)" rx="4"/>
                </g>

                {/* Server 2 */}
                <g transform="translate(150, 140)">
                  <rect x="0" y="0" width="80" height="120" fill="#4B5563" rx="4"/>
                  <rect x="0" y="0" width="80" height="10" fill="#8B5CF6" rx="4"/>
                  <circle cx="15" cy="30" r="8" fill="#374151"/>
                  <circle cx="15" cy="50" r="8" fill="#374151"/>
                  <circle cx="15" cy="70" r="8" fill="#374151"/>
                  <rect x="30" y="25" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="45" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="65" width="40" height="3" fill="#6B7280"/>
                  <rect x="0" y="0" width="80" height="120" fill="url(#serverGlow2)" rx="4"/>
                </g>

                {/* Server 3 */}
                <g transform="translate(250, 160)">
                  <rect x="0" y="0" width="80" height="120" fill="#4B5563" rx="4"/>
                  <rect x="0" y="0" width="80" height="10" fill="#8B5CF6" rx="4"/>
                  <circle cx="15" cy="30" r="8" fill="#374151"/>
                  <circle cx="15" cy="50" r="8" fill="#374151"/>
                  <circle cx="15" cy="70" r="8" fill="#374151"/>
                  <rect x="30" y="25" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="45" width="40" height="3" fill="#6B7280"/>
                  <rect x="30" y="65" width="40" height="3" fill="#6B7280"/>
                  <rect x="0" y="0" width="80" height="120" fill="url(#serverGlow3)" rx="4"/>
                </g>
              </g>

              {/* People illustrations */}
              <g transform="translate(180, 270)">
                <circle cx="0" cy="0" r="12" fill="#FCA5A5"/>
                <rect x="-8" y="12" width="16" height="24" fill="#8B5CF6" rx="2"/>
                <rect x="-12" y="16" width="6" height="20" fill="#8B5CF6"/>
                <rect x="6" y="16" width="6" height="20" fill="#8B5CF6"/>
              </g>

              <g transform="translate(240, 280)">
                <circle cx="0" cy="0" r="12" fill="#FCA5A5"/>
                <rect x="-8" y="12" width="16" height="24" fill="#EC4899" rx="2"/>
                <rect x="-12" y="16" width="6" height="20" fill="#EC4899"/>
                <rect x="6" y="16" width="6" height="20" fill="#EC4899"/>
              </g>

              <g transform="translate(300, 285)">
                <circle cx="0" cy="0" r="12" fill="#FCA5A5"/>
                <rect x="-8" y="12" width="16" height="24" fill="#8B5CF6" rx="2"/>
                <rect x="-12" y="16" width="6" height="20" fill="#8B5CF6"/>
                <rect x="6" y="16" width="6" height="20" fill="#8B5CF6"/>
              </g>

              <g transform="translate(340, 290)">
                <circle cx="0" cy="0" r="12" fill="#FCA5A5"/>
                <rect x="-8" y="12" width="16" height="24" fill="#06B6D4" rx="2"/>
                <rect x="-12" y="16" width="6" height="20" fill="#06B6D4"/>
                <rect x="6" y="16" width="6" height="20" fill="#06B6D4"/>
              </g>

              {/* Gradient definitions for glow effects */}
              <defs>
                <radialGradient id="serverGlow1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="serverGlow2">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="serverGlow3">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero