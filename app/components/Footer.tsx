"use client"

import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Footer(){
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('tryhzix@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid md:grid md:grid-cols-3">
        <div className="footer-left">
          <img src="/avatar.jpg" alt="Mattéo Lopez" className="footer-photo" />
          <div className="footer-identity">
            <div className="footer-name">Mattéo Lopez</div>
            <div className="footer-role">Game Designer</div>
          </div>
          <div className="footer-socials">
            <a href="https://x.com/TryhZix" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social footer-social social-twitter"><Twitter className="social-icon"/></a>
            <a href="https://www.linkedin.com/in/mattéo-lopez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social footer-social social-linkedin"><Linkedin className="social-icon"/></a>
            <a href="https://www.instagram.com/tryhzix/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social footer-social social-instagram"><Instagram className="social-icon"/></a>
          </div>
          <div className="footer-email">
            <button onClick={copyEmail} className="email-button">
              <Mail className="social-icon"/>
              <span>tryhzix@gmail.com</span>
            </button>
            {emailCopied && <div className="email-feedback">Email copié !</div>}
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/projects">Mes projets</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Infos</h4>
          <ul>
            <li><a href="/mentions">Mentions légales</a></li>
            <li><a href="/privacy">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 Mattéo Lopez. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
