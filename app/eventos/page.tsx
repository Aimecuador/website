import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Award, BookOpen, Lightbulb } from "lucide-react"
import { ChevronRight } from "lucide-react"

const eventos = [
  {
    id: 1,
    title: "II Seminario de Geotecnia y Mecánica de Rocas - 2025",
    date: "11-14 Febrero, 2025",
    location: "Quito, Ecuador",
    image: "/placeholder.svg?height=400&width=600&text=Seminario+Geotecnia",
    description:
      "Evento que reunió a expertos nacionales e internacionales para compartir conocimientos sobre estabilidad de taludes, diseño de túneles e innovación geotécnica aplicada a la minería.",
    slug: "seminario-geotecnia-mecanica-rocas-2025",
    destacados: [
      "Conferencias magistrales a cargo de especialistas internacionales",
      "Paneles de discusión técnica",
      "Networking entre profesionales del sector",
      "Participación activa de estudiantes y jóvenes profesionales",
    ],
    objetivo:
      "Fomentar el intercambio de conocimientos, promover buenas prácticas en ingeniería geotécnica y contribuir al desarrollo de una minería segura, eficiente e innovadora.",
    impacto:
      "El evento reforzará la importancia de la geotecnia y la mecánica de rocas como pilares para el desarrollo minero sostenible, destacando el compromiso del sector con la innovación y la mejora continua.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Presentación de Resultados del Laboratorio Social de Innovación Energético Minero",
    date: "15 Enero, 2025",
    time: "10:00 - 13:00",
    location: "Universidad UTE, Quito",
    image: "/placeholder.svg?height=400&width=600&text=Laboratorio+Social",
    description:
      "Presentación de una herramienta de gobernanza minera orientada al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) y la Agenda 2030.",
    slug: "resultados-laboratorio-social-innovacion-minero",
    organizadores:
      "Laboratorio Social de Innovación Energético Minero – Universidad UTE, en colaboración con la Asociación de Ingenieros de Minas del Ecuador (AIME)",
    objetivo:
      "Socializar la propuesta de una herramienta de gobernanza minera orientada al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) y la Agenda 2030, construida de forma participativa a través del diálogo entre múltiples sectores.",
    resultados: [
      "Consolidación de aportes ciudadanos e institucionales para una minería más inclusiva.",
      "Elaboración de una propuesta de gobernanza con enfoque sostenible.",
      "Entrega de los resultados al Ministerio de Minería para su análisis y validación.",
    ],
    impacto:
      "Esta iniciativa marca un hito en la construcción colectiva de políticas públicas mineras que promueven la transparencia, la equidad y la sostenibilidad, fortaleciendo los lazos entre actores estratégicos del país.",
    frase: "Juntos construimos un mejor futuro para el sector minero y nuestro país.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "IV Taller Multisectorial sobre Gobernanza en el Sector Minero – Ibarra 2024",
    date: "12 Diciembre, 2024",
    time: "09:00 - 17:00",
    location: "Ibarra, Ecuador",
    image: "/placeholder.svg?height=400&width=600&text=Taller+Ibarra",
    description:
      "Espacio de diálogo entre gobierno, industria minera, academia y sociedad civil para reflexionar sobre el presente y futuro de la minería en Ecuador.",
    slug: "taller-multisectorial-gobernanza-ibarra",
    tematicas: [
      "Regulación minera con enfoque de sostenibilidad",
      "Desarrollo regional y equidad territorial",
      "Protección ambiental y cooperación multisectorial",
      "Participación de comunidades y transparencia en la gestión minera",
    ],
    objetivo:
      "Fortalecer la gobernanza minera como un pilar fundamental para impulsar el desarrollo regional, priorizando políticas públicas que integren la voz de todos los actores involucrados.",
    frase:
      "La sostenibilidad y el desarrollo regional deben ir de la mano con una minería bien gobernada y socialmente comprometida.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "III Taller Multisectorial sobre Gobernanza en el Sector Minero – Loja 2024",
    date: "21 Noviembre, 2024",
    time: "09:00 - 17:00",
    location: "Universidad Nacional de Loja",
    image: "/placeholder.svg?height=400&width=600&text=Taller+Loja",
    description:
      "La AIME continúa promoviendo espacios de construcción colectiva para el fortalecimiento de la gobernanza minera en Ecuador.",
    slug: "taller-multisectorial-gobernanza-loja",
    participantes: [
      "Estudiantes y docentes universitarios",
      "Empresarios del sector minero",
      "Autoridades ministeriales",
      "Líderes comunitarios y sociedad civil",
    ],
    objetivo:
      "Fortalecer la participación ciudadana y técnica en la formulación de políticas públicas mineras más inclusivas, sostenibles y alineadas al desarrollo territorial.",
    pilares: [
      "Desarrollo económico justo y competitivo",
      "Sostenibilidad ambiental y uso responsable de los recursos",
      "Bienestar y participación activa de las comunidades",
    ],
    mensaje:
      "La gobernanza minera debe construirse desde el diálogo, la inclusión y la visión compartida de un Ecuador más justo y sostenible.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "AIME presente en el XIX Encuentro Anual de Minería – ENAEP 2024",
    date: "26 Noviembre, 2024",
    time: "Todo el día",
    location: "Quito, Ecuador",
    image: "/placeholder.svg?height=400&width=600&text=ENAEP+2024",
    description:
      "La AIME, representada por su presidente Ing. Flavio Granizo, participó activamente en el XIX Encuentro Anual de Minería (ENAEP 2024), uno de los foros más relevantes del sector minero en Ecuador.",
    slug: "aime-encuentro-anual-mineria-enaep-2024",
    temas: [
      "Sostenibilidad y buenas prácticas ambientales",
      "Inclusión y liderazgo de las mujeres en minería",
      "Transición energética y el rol del sector minero",
      "Lucha contra la minería ilegal y desafíos regulatorios",
    ],
    compromiso:
      "AIME reafirmó su compromiso con la minería responsable, el impulso a la transparencia, el fortalecimiento técnico del sector y la construcción de una industria más inclusiva, sostenible y orientada al desarrollo nacional.",
    frase: "La minería del futuro se construye con sostenibilidad, inclusión y compromiso colectivo.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Revisión Técnica del Estándar Consolidado para Minería",
    date: "Octubre-Noviembre, 2024",
    time: "Varias sesiones",
    location: "Sede AIME, Quito",
    image: "/placeholder.svg?height=400&width=600&text=Estándar+Minería",
    description:
      "La Asociación de Ingenieros de Minas del Ecuador (AIME), a través de la CESSA, participó activamente en la revisión técnica del Estándar Consolidado para Minería.",
    slug: "revision-estandar-consolidado-mineria",
    comision: "Comisión de Seguridad, Salud y Ambiente (CESSA – AIME)",
    ejes: [
      "Ética y prácticas comerciales responsables",
      "Salvaguarda de los derechos laborales",
      "Impacto social positivo",
      "Cuidado del medio ambiente",
    ],
    equipo: [
      "Ing. Byron Andrade – Director de la CESSA – AIME",
      "Ing. Patricia Vinueza – CESSA – AIME",
      "Fabricio Proaño – Consultor en responsabilidad social",
      "María José Rodríguez – Consultora en sostenibilidad y género",
      "Flavio Granizo – Presidente de AIME",
      "Andrés Ycaza – Socio de Flor Bustamante Pizarro y Hurtado",
    ],
    mensaje:
      "AIME reafirma su compromiso con una minería ética, inclusiva y sostenible, al servicio del desarrollo del Ecuador y de las futuras generaciones.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
]

export default function EventosPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="h-1 w-10 bg-primary"></div>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Agenda AIME</span>
        <div className="h-1 w-10 bg-primary"></div>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Eventos</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-center">
          Participa en nuestros eventos y mantente actualizado con las últimas tendencias, avances y oportunidades en el
          sector minero ecuatoriano. La AIME organiza y participa en diversos encuentros orientados al desarrollo
          profesional y la promoción de una minería responsable.
        </p>
      </div>

      {/* Eventos Recientes Destacados */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-primary" />
          Eventos Recientes Destacados
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventos.slice(0, 3).map((evento) => (
            <Card key={evento.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
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
                  {evento.time && (
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{evento.time}</span>
                    </div>
                  )}
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
      </section>

      {/* Todos los eventos */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-primary" />
          Historial de Eventos
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventos.map((evento) => (
            <Card
              key={evento.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={evento.image || "/placeholder.svg"}
                  alt={evento.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 p-2 bg-primary/10 rounded-full text-primary">{evento.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{evento.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{evento.date}</span>
                  </div>
                  {evento.time && (
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{evento.time}</span>
                    </div>
                  )}
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{evento.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">{evento.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="default" className="w-full" asChild>
                  <Link href={`/eventos/${evento.slug}`}>Ver detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Sección de contacto para eventos */}
      <section className="mt-16 bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">¿Interesado en nuestros eventos?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Si deseas más información sobre nuestros próximos eventos o estás interesado en participar, no dudes en
          contactarnos. Podemos proporcionarte detalles adicionales sobre fechas, ubicaciones y programas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contacto">Contáctanos</Link>
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/blog" className="flex items-center">
              Ver noticias relacionadas
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

