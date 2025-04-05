import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function ServiciosPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>

      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Capacitación y asistencia técnica</h2>
            <div className="space-y-4">
              <p>
                La AIME organiza seminarios, conferencias y talleres dirigidos a profesionales del sector minero. Estos
                eventos están enfocados en diversas áreas como seguridad en operaciones, minería responsable y
                construcción.
              </p>
              <p>
                Nuestros programas de capacitación son impartidos por expertos en el campo y están diseñados para
                mantener a los profesionales actualizados con las últimas tendencias, tecnologías y mejores prácticas de
                la industria.
              </p>
              <p>Entre nuestras actividades destacadas se encuentran:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Talleres prácticos sobre seguridad minera</li>
                <li>Conferencias sobre normativa ambiental y minería sostenible</li>
                <li>Seminarios técnicos sobre métodos de exploración y explotación</li>
                <li>Cursos de actualización profesional en geología y minería</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600&text=Capacitación"
              alt="Capacitación y asistencia técnica"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Convenios"
                alt="Convenios de cooperación"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-4">Convenios de cooperación</h2>
            <div className="space-y-4">
              <p>
                La asociación colabora con entidades gubernamentales y otras organizaciones para promover el desarrollo
                de proyectos y actividades en el ámbito geológico-minero.
              </p>
              <p>
                Un ejemplo destacado es el convenio firmado con el Ministerio de Energía y Recursos Naturales No
                Renovables para fomentar la asistencia técnica y la capacitación en el sector.
              </p>
              <p>Estos convenios nos permiten:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Desarrollar programas conjuntos de formación profesional</li>
                <li>Participar en la elaboración de políticas públicas para el sector</li>
                <li>Colaborar en proyectos de investigación y desarrollo</li>
                <li>Facilitar el intercambio de conocimientos y experiencias entre profesionales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Otros servicios</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Publicaciones técnicas</h3>
            <p className="text-muted-foreground mb-4">
              Revista técnica, boletines informativos y estudios especializados del sector minero.
            </p>
            <Button variant="outline" className="group" asChild>
              <Link href="/servicios/publicaciones" className="flex items-center">
                Ver más
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Eventos y Networking</h3>
            <p className="text-muted-foreground mb-4">
              Organización de congresos, foros y eventos para profesionales del sector.
            </p>
            <Button variant="outline" className="group" asChild>
              <Link href="/eventos" className="flex items-center">
                Ver más
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Bolsa de Trabajo</h3>
            <p className="text-muted-foreground mb-4">
              Conectamos a profesionales con oportunidades laborales en el sector minero.
            </p>
            <Button variant="outline" className="group" asChild>
              <Link href="/servicios/empleo" className="flex items-center">
                Ver más
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">¿Necesitas más información?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Si deseas obtener más detalles sobre nuestros servicios o tienes alguna consulta específica, no dudes en
          contactarnos.
        </p>
        <Button size="lg" asChild>
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </section>
    </main>
  )
}

