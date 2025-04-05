"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Cuando la ruta cambia, desplazar al inicio de la página
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

