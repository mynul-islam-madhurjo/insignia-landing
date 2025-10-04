import React from 'react'

const DataStorageBank = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Illustration */}
          <div className="flex justify-center order-2 md:order-1">
            <svg 
              className="w-full max-w-sm md:max-w-md" 
              viewBox="0 0 300 350" 
              fill="none"
            >
              {/* Server with base */}
              <g transform="translate(80, 100)">
                {/* Server base/platform */}
                <ellipse cx="35" cy="105" rx="45" ry="8" fill="#8B5CF6" opacity="0.3"/>
                
                {/* Main server body */}
                <rect x="0" y="0" width="70" height="100" fill="#4B5563" rx="4"/>
                <rect x="0" y="0" width="70" height="8" fill="#8B5CF6" rx="4"/>
                
                {/* Server details */}
                <circle cx="12" cy="25" r="7" fill="#374151"/>
                <circle cx="12" cy="45" r="7" fill="#374151"/>
                <circle cx="12" cy="65" r="7" fill="#374151"/>
                
                {/* LED indicators */}
                <circle cx="12" cy="25" r="3" fill="#10B981" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="45" r="3" fill="#10B981" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="65" r="3" fill="#10B981" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite"/>
                </circle>
                
                <rect x="25" y="22" width="35" height="2" fill="#6B7280" rx="1"/>
                <rect x="25" y="42" width="35" height="2" fill="#6B7280" rx="1"/>
                <rect x="25" y="62" width="35" height="2" fill="#6B7280" rx="1"/>
                
                {/* Glow effect */}
                <rect x="0" y="0" width="70" height="100" fill="url(#serverGlowBank)" rx="4"/>
              </g>

              {/* Mobile Phone */}
              <g transform="translate(170, 80)">
                {/* Phone shadow */}
                <ellipse cx="45" cy="165" rx="40" ry="6" fill="#000" opacity="0.2"/>
                
                {/* Phone body */}
                <rect x="0" y="0" width="90" height="160" fill="#374151" rx="12" 
                  stroke="#1F2937" strokeWidth="2"/>
                
                {/* Phone screen */}
                <rect x="5" y="5" width="80" height="150" fill="#1F2937" rx="8"/>
                
                {/* Screen content area */}
                <rect x="10" y="20" width="70" height="120" fill="#111827" rx="4"/>
                
                {/* App icons on screen */}
                <rect x="15" y="25" width="15" height="15" fill="#8B5CF6" rx="3"/>
                <rect x="35" y="25" width="15" height="15" fill="#EC4899" rx="3"/>
                <rect x="55" y="25" width="15" height="15" fill="#06B6D4" rx="3"/>
                
                <rect x="15" y="45" width="15" height="15" fill="#10B981" rx="3"/>
                <rect x="35" y="45" width="15" height="15" fill="#F59E0B" rx="3"/>
                <rect x="55" y="45" width="15" height="15" fill="#EF4444" rx="3"/>
                
                {/* Home button */}
                <circle cx="45" cy="148" r="6" fill="#4B5563"/>
              </g>

              {/* Lock/Security icon */}
              <g transform="translate(200, 120)">
                {/* Lock body */}
                <rect x="0" y="15" width="35" height="40" fill="#8B5CF6" rx="4" opacity="0.9"/>
                
                {/* Lock shackle */}
                <path 
                  d="M 8 15 L 8 5 Q 8 -3 17.5 -3 Q 27 -3 27 5 L 27 15" 
                  stroke="#8B5CF6" 
                  strokeWidth="5" 
                  fill="none"
                  opacity="0.9"
                />
                
                {/* Keyhole */}
                <circle cx="17.5" cy="30" r="4" fill="#1F2937"/>
                <rect x="15.5" y="32" width="4" height="8" fill="#1F2937" rx="1"/>
                
                {/* Glow effect */}
                <rect x="0" y="15" width="35" height="40" fill="url(#lockGlow)" rx="4"/>
              </g>

              {/* Person using phone */}
              <g transform="translate(60, 180)">
                {/* Head */}
                <circle cx="0" cy="0" r="10" fill="#FCA5A5"/>
                
                {/* Body */}
                <rect x="-7" y="10" width="14" height="22" fill="#EDE9FE" rx="2"/>
                
                {/* Arms */}
                <rect x="-10" y="14" width="5" height="18" fill="#8B5CF6" rx="2"/>
                <rect x="5" y="14" width="5" height="18" fill="#8B5CF6" rx="2"/>
                
                {/* Legs */}
                <rect x="-6" y="32" width="5" height="16" fill="#6366F1" rx="2"/>
                <rect x="1" y="32" width="5" height="16" fill="#6366F1" rx="2"/>
              </g>

              {/* Gradient definitions */}
              <defs>
                <radialGradient id="serverGlowBank">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="lockGlow">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="section-title">
              We are a high-level data storage bank
            </h2>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                The place to store various data that you can access at any time 
                through the internet and where you can carry it.
              </p>
              <p>
                This very flexible storage area has a high level of security. 
                To enter into your own data you must enter the password that you 
                created when you registered in this Data Warehouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataStorageBank