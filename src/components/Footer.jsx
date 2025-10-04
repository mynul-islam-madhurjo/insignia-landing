import React from 'react'
import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: 'Profile', href: '#' },
      { name: 'Features', href: '#features' },
      { name: 'Careers', href: '#' },
      { name: 'DW News', href: '#' }
    ],
    help: [
      { name: 'Support', href: '#' },
      { name: 'Sign up', href: '#signup' },
      { name: 'Guide', href: '#' },
      { name: 'Reports', href: '#' },
      { name: 'Q&A', href: '#' }
    ]
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com',
      hoverColor: 'hover:text-blue-500'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com',
      hoverColor: 'hover:text-sky-400'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com',
      hoverColor: 'hover:text-pink-500'
    }
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xl font-bold text-cyan-400">Insignia</span>
            </div>
            
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="text-cyan-400 font-medium">Insignia Society, 234</p>
              <p>Bahagia Ave Street</p>
              <p className="text-cyan-400 font-medium">PRBW 29281</p>
            </div>
            
            <div className="space-y-2 text-gray-400 text-sm pt-4">
              <p className="text-cyan-400">info@insignia.com</p>
              <p>1-232-3434 (Main)</p>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Social Media</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-current transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © Insignia - {currentYear}. All rights reserved.
          </p>
          
          {/* Chat Button */}
          <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm">Chat with us</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer