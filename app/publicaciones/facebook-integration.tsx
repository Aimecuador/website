"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import FacebookFeed from "@/components/facebook-feed"

export default function FacebookIntegration() {
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!isClient) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        </CardContent>
      </Card>
    )
  }

  // Ajustar el ancho y la altura según el tamaño de la pantalla
  const getResponsiveWidth = () => {
    if (windowWidth < 640) return 320 // móvil
    if (windowWidth < 1024) return 500 // tablet
    return 500 // desktop
  }

  return (
    <Card>
      <CardContent className="pt-6 flex justify-center">
        <div className="facebook-integration">
          <FacebookFeed
            pageUrl="https://www.facebook.com/AimeEcuador"
            tabs="timeline"
            width={getResponsiveWidth()}
            height={800}
            showFaces={false}
            adapt={true}
          />
        </div>
      </CardContent>
    </Card>
  )
}

