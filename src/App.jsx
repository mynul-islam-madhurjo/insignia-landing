import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import DataStorageBank from './components/DataStorageBank'
import Features from './components/Features'
import DownloadApp from './components/DownloadApp'
import Testimonials from './components/Testimonials'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <DataStorageBank />
          <Features />
          <DownloadApp />
          <Testimonials />
          <Subscribe />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App