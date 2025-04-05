"use client"

import { useState, useRef, useEffect } from "react"

interface LogoMarqueeProps {
  logos: {
    name: string
    image: string
  }[]
  speed?: number
}

export default function LogoMarquee({ logos, speed = 30 }: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const currentPositionRef = useRef(0)
  const lastTimestampRef = useRef<number | null>(null)

  // Duplicar los logos para crear un efecto continuo
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    // Animación con requestAnimationFrame para mejor rendimiento
    let animationId: number

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp
      }

      if (!isPaused && marqueeRef.current) {
        // Calcular el tiempo transcurrido desde el último frame
        const elapsed = timestamp - lastTimestampRef.current

        // Actualizar la posición actual basada en el tiempo transcurrido y la velocidad
        currentPositionRef.current += (elapsed * speed) / 1000

        // Mover el contenedor
        marqueeRef.current.style.transform = `translateX(-${currentPositionRef.current}px)`

        // Reiniciar cuando se haya movido la mitad de los logos
        const containerWidth = marqueeRef.current.scrollWidth / 2
        if (currentPositionRef.current >= containerWidth) {
          currentPositionRef.current = 0
        }
      }

      // Actualizar el timestamp para el próximo frame
      lastTimestampRef.current = timestamp

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused, speed])

  return (
    <div className="w-full overflow-hidden h-36">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="inline-flex items-center justify-center bg-transparent rounded-lg py-4 px-2 mx-1 h-32 min-w-[200px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={80}
              className="max-h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

