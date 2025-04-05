import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  History,
  Target,
  Compass,
  AwardIcon,
  CheckCircle,
  Shield,
  Leaf,
  Lightbulb,
  Heart,
  ChevronRight,
} from "lucide-react"
import { Award } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NosotrosPage() {
  // Datos de valores y principios
  const valoresYPrincipios = [
    {
      id: "excelencia",
      title: "Excelencia Profesional",
      description:
        "Promovemos los más altos estándares de calidad y competencia t��cnica en la práctica de la ingeniería de minas.",
      icon: <Award className="h-10 w-10" />,
    },
    {
      id: "etica",
      title: "Ética",
      description: "Actuamos con integridad, honestidad y transparencia en todas nuestras actividades profesionales.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      id: "sostenibilidad",
      title: "Sostenibilidad",
      description:
        "Impulsamos prácticas mineras que equilibran el desarrollo económico con la protección ambiental y el bienestar social.",
      icon: <Leaf className="h-10 w-10" />,
    },
    {
      id: "innovacion",
      title: "Innovación",
      description:
        "Fomentamos la investigación, el desarrollo y la aplicación de nuevas tecnologías y metodologías en el sector minero.",
      icon: <Lightbulb className="h-10 w-10" />,
    },
    {
      id: "colaboracion",
      title: "Colaboración",
      description:
        "Trabajamos en conjunto con todos los actores del sector para lograr objetivos comunes y generar sinergias.",
      icon: <Users className="h-10 w-10" />,
    },
    {
      id: "responsabilidad",
      title: "Responsabilidad Social",
      description:
        "Promovemos el compromiso con las comunidades y el desarrollo social en las áreas de influencia de la actividad minera.",
      icon: <Heart className="h-10 w-10" />,
    },
  ]

  return (
    <main className="container mx-auto py-12">
      <section className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Sobre Nosotros</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Quiénes Somos</h1>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  La Asociación de Ingenieros en Minas del Ecuador (AIME) es una organización profesional que agrupa a
                  los ingenieros en minas del país, comprometida con el desarrollo técnico, científico y ético de la
                  minería ecuatoriana.
                </p>
              </div>
              <p>
                Nuestro propósito es fomentar la excelencia profesional, promover el intercambio de conocimientos, y
                fortalecer el rol del ingeniero en minas como un actor clave en la sostenibilidad y competitividad del
                sector minero nacional.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=800&width=600" alt="Ingenieros de AIME" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="historia" className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Nuestra Trayectoria
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-6">Historia</h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/nosotros/historia-aime.webp"
                alt="Fundación histórica de AIME"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <History className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  La Asociación fue fundada en el año 1989 con el objetivo de representar y apoyar a los profesionales
                  de la ingeniería en minas en el Ecuador, consolidando un espacio de encuentro, formación y defensa de
                  los intereses gremiales.
                </p>
              </div>
              <p>
                A lo largo de los años, ha trabajado en estrecha colaboración con instituciones públicas, privadas y
                académicas, participando activamente en el desarrollo del sector minero del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mision-vision" className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Nuestro Propósito</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-muted p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Misión</h2>
            </div>
            <p>
              Promover el desarrollo integral de los ingenieros en minas del Ecuador, fomentando la ética profesional,
              la actualización técnica y científica, y el compromiso con una minería responsable y sostenible.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Visión</h2>
            </div>
            <p>
              Ser una organización líder y referente en el ámbito minero ecuatoriano, reconocida por su compromiso con
              la excelencia profesional, la innovación y la defensa de los principios técnicos y éticos de la ingeniería
              en minas.
            </p>
          </div>
        </div>
      </section>

      <section id="valores" className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Nuestros Principios
          </span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <AwardIcon className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Valores y Principios</h2>
        </div>

        {/* Accordion para Valores y Principios */}
        <Accordion type="single" collapsible className="w-full">
          {valoresYPrincipios.map((valor) => (
            <AccordionItem key={valor.id} value={valor.id} className="border rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-muted/50 hover:bg-muted group">
                <div className="flex items-center gap-4">
                  <div className="text-primary transition-colors duration-300 group-hover:text-primary/80">
                    {valor.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 text-left">
                    {valor.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                <p className="pl-14">{valor.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="objetivos" className="mb-16">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Nuestras Metas</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Objetivos</h2>
        </div>
        <div className="bg-muted p-8 rounded-lg shadow-sm">
          <ul className="space-y-4">
            {[
              "Representar y respaldar los intereses de los ingenieros en minas a nivel nacional e internacional.",
              "Impulsar la formación continua y el desarrollo profesional de sus miembros.",
              "Promover la investigación, la innovación y el uso de tecnologías en la ingeniería de minas.",
              "Fomentar espacios de diálogo y colaboración con los diferentes actores del sector minero.",
              "Contribuir al desarrollo de una minería sustentable y alineada con los objetivos del país.",
            ].map((objetivo, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                <p>{objetivo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-center py-8 px-4 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-6">¿Quieres ser parte de AIME?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Únete a la comunidad de profesionales de la ingeniería de minas más importante de Ecuador. Accede a beneficios
          exclusivos, oportunidades de networking y desarrollo profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="transition-all duration-300 hover:scale-105">
            <Link href="#membresia">Hazte Miembro</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

