"use client"

import Image from 'next/image'
import { Home, Folder, Info, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname() || '/'

  const links = [
    { href: '/', label: 'Accueil', icon: <Home className="nav-icon" /> },
    { href: '/projects', label: 'Mes projets', icon: <Folder className="nav-icon" /> },
    { href: '/about', label: 'A propos', icon: <Info className="nav-icon" /> },
    { href: '/#contact', label: 'Contact', icon: <Mail className="nav-icon" /> },
  ]

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center shrink-0">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="w-full h-full" />
        </a>
        <nav>
          <ul className="nav-list flex gap-3 sm:gap-4 md:gap-6 lg:gap-20 items-center">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
              return (
                <li key={l.href}>
                  <a href={l.href} className={`nav-link ${active ? 'active' : ''}`}>
                    {l.icon}
                    <span className="nav-label hidden sm:inline text-xs md:text-sm lg:text-base whitespace-nowrap">{l.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
