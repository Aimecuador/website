import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight } from "lucide-react"

// Datos reales de los blogs
const blogPosts = [
  {
    id: 1,
    title: "Congreso Universitario de Minería Ecuamining, Salinas 2024",
    date: "30 de octubre de 2024",
    slug: "aime-congreso-ecuamining-salinas-2024",
    excerpt:
      "La Asociación de Ingenieros de Minas del Ecuador (AIME) participó en el Congreso Universitario de Minería Ecuamining Salinas 2024, donde el presidente Flavio Granizo destacó la importancia de la educación continua y la sostenibilidad en la minería.",
    image: "/images/blogs/card-ecuamining.webp",
  },
  {
    id: 2,
    title: "AIME y Viceministerio de Minas fortalecen la minería responsable en Ecuador",
    date: "25 de octubre de 2024",
    slug: "aime-viceministerio-mineria-responsable-ecuador",
    excerpt:
      "AIME sostuvo una reunión con la Viceministra de Minas, Rebeca Illescas, para fortalecer la cooperación técnica y promover la minería responsable en Ecuador.",
    image: "/images/blogs/card-viceministerio.webp",
  },
  {
    id: 3,
    title:
      "Impulso a la minería responsable: Reflexiones del I Simposio Internacional sobre el potencial minero de Ecuador",
    date: "11 de octubre de 2024",
    slug: "impulso-mineria-responsable-simposio-ecuador",
    excerpt:
      "El I Simposio Internacional de Geología, Minería y Metalurgia reunió a expertos para debatir sobre minería sostenible en Ecuador. Se destacó la importancia de un marco legal robusto, la colaboración interinstitucional y la capacitación para impulsar una minería responsable.",
    image: "/images/blogs/card-simposio.webp",
  },
  {
    id: 4,
    title: "Explorando la innovación y el conocimiento en el II Seminario de Geotecnia y Mecánica de Rocas",
    date: "28 de noviembre de 2024",
    slug: "innovacion-seminario-geotecnia-mecanica-rocas",
    excerpt:
      "La AIME presenta el II Seminario de Mecánica de Rocas y Geotecnia, un evento que reunirá a expertos nacionales e internacionales para abordar los retos de la ingeniería geotécnica y minera. Se destacará la importancia de la estabilidad de taludes, diseño de túneles y uso de drones en modelación geotécnica.",
    image: "/images/blogs/card-seminario.webp",
  },
  {
    id: 5,
    title: "Construyamos puentes de diálogo para un desarrollo sostenible",
    date: "13 de enero de 2025",
    slug: "dialogo-desarrollo-sostenible-mineria",
    excerpt:
      "La AIME exhorta a fortalecer el diálogo entre comunidades, empresas y autoridades para la resolución de diferencias en proyectos mineros. Se reafirma el compromiso con la consulta previa, la transparencia y la promoción de una minería responsable y sostenible en Ecuador.",
    image: "/images/blogs/card-dialogo.webp",
  },
]

export default function BlogPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-1 w-10 bg-primary"></div>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Publicaciones</span>
      </div>
      <h1 className="text-4xl font-bold mb-8">Blog AIME</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-center">
          Artículos, noticias y análisis sobre el sector minero ecuatoriano, escritos por profesionales de la Asociación
          de Ingenieros en Minas del Ecuador.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="p-0">
              {/* Proporción 16:9 para las cards */}
              <div className="relative w-full pt-[56.25%] bg-muted">
                {/* Aquí irá la imagen de la card (se añadirán después) */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <p className="text-sm">Imagen del blog</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <CardTitle className="mb-2 line-clamp-2">{post.title}</CardTitle>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Button variant="outline" className="w-full group" asChild>
                <Link href={`/blog/${post.slug}`} className="flex items-center justify-center">
                  Leer más
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

