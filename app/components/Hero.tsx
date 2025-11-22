"use client"

import { Twitter, Linkedin, Instagram, Download, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = ['Game Designer', 'Monteur vidéo', 'Photographe']

export default function Hero(){
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    
    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentRoleText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRoleText.slice(0, displayedText.length + 1))
        }, 80) // 80ms per character for typing speed
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2500) // Wait 2.5s before starting to delete
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50) // Faster deletion
        return () => clearTimeout(timeout)
      } else {
        // Move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentRole])

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-title text-lg sm:text-2xl md:text-3xl lg:text-5xl whitespace-nowrap">Hey, je suis Mattéo</h1>
            <h2 className="hero-role typing-effect text-base sm:text-lg md:text-2xl lg:text-3xl">{displayedText}<span className="typing-cursor"></span></h2>
            <p className="hero-intro text-xs sm:text-sm md:text-base lg:text-lg">Passionné de jeux vidéo et de game design, je conçois des expériences ludiques en mêlant créativité, narration visuelle, vidéo et photographie.</p>
            <div className="hero-ctas flex flex-row gap-2 sm:gap-3 md:gap-4">
              <a className="btn btn-outline icon-btn text-xs sm:text-sm md:text-base px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 shrink-0" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="nav-icon w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Télécharger mon CV</span>
                <span className="sm:hidden">CV</span>
              </a>
              <a className="btn btn-solid icon-btn text-xs sm:text-sm md:text-base px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 shrink-0" href="/#contact">
                <Mail className="nav-icon w-3 h-3 sm:w-4 sm:h-4" />
                <span>Contacter</span>
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://x.com/TryhZix" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social social-twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mattéo-lopez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social social-linkedin">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://www.instagram.com/tryhzix/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social social-instagram">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right hidden md:flex md:justify-center md:items-center">
          <img src="/me.jpg" alt="Mattéo portrait" className="hero-image w-[clamp(12rem,20vw,24rem)] h-auto" />
        </div>
      </div>
    </section>
  )
}
