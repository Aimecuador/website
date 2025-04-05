"use client"

import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Usar lazy para cargar el componente del mapa
const GoogleMapComponent = lazy(() =>
  import("./google-map-component").then((module) => ({
    default: module.default,
  })),
)

// Componente wrapper con Suspense
export default function GoogleMapWrapper() {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Suspense fallback={<Skeleton className="w-full h-[450px] rounded-lg" />}>
        <GoogleMapComponent />
      </Suspense>
    </div>
  )
}

