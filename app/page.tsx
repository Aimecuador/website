import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight, Clock, MapPin } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import LogoMarquee from "@/components/logo-marquee"

const eventosDestacados = [
  {
    id: 1,
    title: "II Seminario de Geotecnia y Mecánica de Rocas - 2025",
    date: "11-14 Febrero, 2025",
    location: "Quito, Ecuador",
    image: "/images/eventos/cards/ii-seminario-de-geotecnia-y-mecanica-de-rocas-2025-card.webp",
    description:
      "Evento que reunió a expertos nacionales e internacionales para compartir conocimientos sobre estabilidad de taludes, diseño de túneles e innovación geotécnica aplicada a la minería.",
    slug: "seminario-geotecnia-mecanica-rocas-2025",
  },
  {
    id: 2,
    title: "Presentación de Resultados del Laboratorio Social de Innovación Energético Minero",
    date: "15 Enero, 2025",
    location: "Universidad UTE, Quito",
    image: "/placeholder.svg?height=400&width=600&text=Laboratorio+Social",
    description:
      "Presentación de una herramienta de gobernanza minera orientada al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) y la Agenda 2030.",
    slug: "resultados-laboratorio-social-innovacion-minero",
  },
  {
    id: 3,
    title: "IV Taller Multisectorial sobre Gobernanza en el Sector Minero – Ibarra 2024",
    date: "12 Diciembre, 2024",
    location: "Ibarra, Ecuador",
    image: "/placeholder.svg?height=400&width=600&text=Taller+Ibarra",
    description:
      "Espacio de diálogo entre gobierno, industria minera, academia y sociedad civil para reflexionar sobre el presente y futuro de la minería en Ecuador.",
    slug: "taller-multisectorial-gobernanza-ibarra",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Eventos Section */}
      <section id="eventos" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-1 w-10 bg-primary"></div>
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Actividades</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Eventos Recientes</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                Participa en nuestros eventos y mantente actualizado con las últimas tendencias y avances en el sector
                minero.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 self-start md:self-auto group" asChild>
              <Link href="/eventos" className="flex items-center">
                Ver todos los eventos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventosDestacados.map((evento, index) => (
              <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={evento.image || "/placeholder.svg"}
                    alt={evento.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{evento.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{evento.date}</span>
                    </div>
                    {/* {evento.time && (
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{evento.time}</span>
                      </div>
                    )} */}
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{evento.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{evento.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" asChild>
                    <Link href={`/eventos/${evento.slug}`}>Ver detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-1 w-10 bg-primary"></div>
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Imágenes</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Galería</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                Explora momentos destacados de nuestras actividades, eventos y proyectos mineros.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 self-start md:self-auto group" asChild>
              <Link href="/galeria" className="flex items-center">
                Ver galería completa
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Congreso Anual 2023",
                image: "/placeholder.svg?height=400&width=400&text=Congreso+2023",
              },
              {
                title: "Visita técnica a mina",
                image: "/placeholder.svg?height=400&width=400&text=Visita+Técnica",
              },
              {
                title: "Taller de seguridad minera",
                image: "/placeholder.svg?height=400&width=400&text=Taller",
              },
              {
                title: "Conferencia internacional",
                image: "/placeholder.svg?height=400&width=400&text=Conferencia",
              },
              {
                title: "Capacitación profesional",
                image: "/placeholder.svg?height=400&width=400&text=Capacitación",
              },
              {
                title: "Proyecto comunitario",
                image: "/placeholder.svg?height=400&width=400&text=Proyecto",
              },
              {
                title: "Reunión directiva",
                image: "/placeholder.svg?height=400&width=400&text=Reunión",
              },
              {
                title: "Feria minera",
                image: "/placeholder.svg?height=400&width=400&text=Feria",
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium text-sm md:text-base">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Activities Section */}
      <section id="servicios" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center space-x-2 mb-2 justify-center">
              <div className="h-1 w-10 bg-primary"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Lo que ofrecemos
              </span>
              <div className="h-1 w-10 bg-primary"></div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              AIME ofrece una variedad de servicios y actividades para apoyar a los profesionales de la minería y
              promover el desarrollo sostenible del sector.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-muted rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-muted/70">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Capacitación y asistencia técnica</h3>
              <p className="text-muted-foreground mb-4">
                Organizamos seminarios, conferencias y talleres dirigidos a profesionales del sector minero, enfocados
                en seguridad en operaciones, minería responsable y construcción.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href="/servicios" className="flex items-center">
                  Ver más
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-muted/70">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Convenios de cooperación</h3>
              <p className="text-muted-foreground mb-4">
                Colaboramos con entidades gubernamentales y otras organizaciones para promover el desarrollo de
                proyectos y actividades en el ámbito geológico-minero.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link href="/servicios" className="flex items-center">
                  Ver más
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Convenios Interinstitucionales Section */}
      <section id="convenios" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center space-x-2 mb-2 justify-center">
              <div className="h-1 w-10 bg-primary"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Alianzas estratégicas
              </span>
              <div className="h-1 w-10 bg-primary"></div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Convenios Interinstitucionales
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Trabajamos en colaboración con instituciones académicas, gubernamentales y empresas del sector para
              fortalecer la industria minera ecuatoriana y promover el desarrollo profesional.
            </p>
          </div>

          <LogoMarquee
            logos={Array.from({ length: 10 }).map((_, index) => ({
              name: `Institución ${index + 1}`,
              image: `/placeholder.svg?height=120&width=180&text=Institución+${index + 1}`,
            }))}
            speed={40}
          />
        </div>
      </section>
    </>
  )
}

