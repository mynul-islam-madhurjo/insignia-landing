import React from 'react'

const DownloadApp = () => {
  const appItems = [
    { name: 'Document', color: 'bg-blue-500' },
    { name: 'Recent', color: 'bg-red-500' },
    { name: 'Folder', color: 'bg-yellow-500' },
    { name: 'Latest', color: 'bg-cyan-500' },
    { name: 'Assets', color: 'bg-blue-500' },
    { name: 'Folder', color: 'bg-red-500' },
    { name: 'Document', color: 'bg-yellow-500' },
    { name: 'Recent', color: 'bg-cyan-500' },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="section-title">
              Download Our App
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

            <div className="pt-4">
              <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl hover:scale-105">
                Download
              </button>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone Device */}
              <div className="w-64 sm:w-72 h-[500px] sm:h-[540px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                
                {/* Screen Content */}
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-full p-6 overflow-hidden">
                  
                  {/* Header Section */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4 shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400 text-sm font-semibold">Your Data</span>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search Folder" 
                        className="w-full bg-gray-800 text-white text-sm p-2.5 rounded-lg pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        readOnly
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs text-gray-400">
                      Recent ▼
                    </div>
                  </div>

                  {/* Files/Folders List */}
                  <div className="space-y-2.5 overflow-y-auto max-h-[340px] scrollbar-hide">
                    {appItems.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between bg-gray-800 bg-opacity-60 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shadow-md`}>
                            {item.name === 'Folder' ? (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white">{item.name}</span>
                            <div className="text-xs text-gray-400">2.3 MB</div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Floating Add Button */}
                  <button className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default DownloadApp