"use client"

import { useEffect, useRef } from "react"

interface FacebookFeedProps {
  pageUrl: string
  tabs?: string
  width?: string | number
  height?: string | number
  small?: boolean
  adapt?: boolean
  showFaces?: boolean
  hideCover?: boolean
}

export default function FacebookFeed({
  pageUrl,
  tabs = "timeline",
  width = "500",
  height = "700",
  small = false,
  adapt = true,
  showFaces = true,
  hideCover = false,
}: FacebookFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cargar el SDK de Facebook
    const loadFacebookSDK = () => {
      // Verificar si el SDK ya está cargado
      if (document.getElementById("facebook-jssdk")) return

      // Agregar el div para el SDK
      const fbRoot = document.createElement("div")
      fbRoot.id = "fb-root"
      document.body.appendChild(fbRoot)

      // Cargar el script del SDK
      const script = document.createElement("script")
      script.id = "facebook-jssdk"
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)
    }

    // Cargar el SDK y renderizar el plugin
    loadFacebookSDK()

    // Renderizar el plugin cuando el SDK esté listo
    const renderPlugin = () => {
      if ((window as any).FB) {
        ;(window as any).FB.XFBML.parse(containerRef.current)
      } else {
        // Si el SDK aún no está listo, intentar de nuevo en 100ms
        setTimeout(renderPlugin, 100)
      }
    }

    renderPlugin()

    // Limpiar al desmontar
    return () => {
      // No eliminamos el script para evitar problemas con otras instancias
    }
  }, [pageUrl])

  return (
    <div ref={containerRef} className="facebook-feed-container w-full overflow-hidden">
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header={small}
        data-adapt-container-width={adapt}
        data-hide-cover={hideCover}
        data-show-facepile={showFaces}
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>AIME Ecuador</a>
        </blockquote>
      </div>
    </div>
  )
}

