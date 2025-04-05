"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ReactNode, useState } from "react"

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
  onClick?: () => void
}

export default function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "after:w-full",
  onClick,
}: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
  const [isHovered, setIsHovered] = useState(false)

  // Determinar si mostrar el underline activo
  // Solo mostrar si está activo Y no hay ningún elemento con hover
  const showActiveUnderline = isActive && !isHovered

  return (
    <Link
      href={href}
      className={`${className} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-in-out ${
        showActiveUnderline ? activeClassName : "after:w-0 hover:after:w-full"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  )
}

