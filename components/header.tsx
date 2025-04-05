"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import SocialIcons from "./social-icons"
// Importar el nuevo componente ActiveLink
import ActiveLink from "./active-link"

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Quienes Somos", href: "/nosotros" },
  { name: "Comisiones Técnicas", href: "/comisiones-tecnicas" },
  { name: "Eventos", href: "/eventos" },
  { name: "PINU", href: "/pinu" },
  { name: "Minería para todos", href: "/mineria-para-todos" },
  { name: "Publicaciones", href: "/publicaciones" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Detectar scroll para ocultar la barra superior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu")
      const mobileMenuButton = document.getElementById("mobile-menu-button")

      if (mobileMenu && mobileMenuButton) {
        const target = event.target as Node
        const isClickInside = mobileMenu.contains(target) || mobileMenuButton.contains(target)

        if (!isClickInside && isMenuOpen) {
          setIsMenuOpen(false)
        }
      }
    }

    // Close menu on window resize
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Barra superior con redes sociales - se oculta al hacer scroll */}
      <div
        className={`bg-secondary text-white transition-all duration-300 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto flex items-center justify-end py-2">
          <SocialIcons />
        </div>
      </div>

      {/* Barra principal de navegación */}
      <div className="container mx-auto py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" scroll className="w-[30%] max-w-[65px]">
            <Image
              src="/aime-logo-sin-texto.jpg"
              alt="AIME logo"
              width={160}
              height={160}
              className="hidden md:block"
            />
            <Image src="/aime-logo-sin-texto.jpg" alt="AIME logo" width={120} height={120} className="md:hidden" />
          </Link>

          {/* Enlaces de navegación (escritorio) */}
          <nav className="hidden xl:flex items-center gap-5" onMouseLeave={() => setHoveredLink(null)}>
            {menuItems.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                scroll={true}
                className="font-medium text-gray-700 transition-colors py-2 hover:text-primary"
                onMouseEnter={() => setHoveredLink(item.href)}
              >
                {item.name}
              </ActiveLink>
            ))}
          </nav>

          {/* Botón de Hazte Miembro (escritorio) */}
          <button className="hidden xl:block bg-primary rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-opacity-90 hover:cursor-pointer">
            Hazte Miembro
          </button>

          {/* Botón de menú móvil */}
          <button
            id="mobile-menu-button"
            className="focus:outline-none xl:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>

        {/* Menú mobile flotante */}
        <div
          id="mobile-menu"
          className={`mobile-menu absolute top-full left-0 z-40 w-full border-t border-gray-200 bg-white shadow-lg xl:hidden ${isMenuOpen ? "open" : ""}`}
        >
          <nav className="space-y-1 px-2 pt-2 pb-3">
            {menuItems.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.href}
                scroll={true}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </ActiveLink>
            ))}

            <div className="border-t border-gray-200 pt-4 pb-3">
              <button className="bg-primary block w-full rounded-md px-4 py-2 text-center text-base font-medium text-white transition-colors duration-300 hover:cursor-pointer hover:bg-opacity-90">
                Hazte Miembro
              </button>
            </div>
          </nav>
        </div>
      </div>
      <style jsx>{`
        /* Estilos para la animación del botón, de hamburguesa a X */
        .hamburger {
          cursor: pointer;
          width: 24px;
          height: 24px;
          position: relative;
        }

        .hamburger-line {
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: #4b5563;
          transition: all 0.3s ease;
        }

        .hamburger-line:nth-child(1) {
          right: 0;
          top: 6px;
        }

        .hamburger-line:nth-child(2) {
          right: 0;
          top: 12px;
        }

        .hamburger-line:nth-child(3) {
          right: 0;
          top: 18px;
        }

        .hamburger.active .hamburger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          background-color: #454545;
        }

        .hamburger.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active .hamburger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          background-color: #454545;
        }

        /* Animación para el menú flotante */
        .mobile-menu {
          transform: translateY(-40%);
          opacity: 0;
          visibility: hidden;
          transition:
            transform 0.3s ease,
            opacity 0.2s ease,
            visibility 0.2s ease;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </header>
  )
}

