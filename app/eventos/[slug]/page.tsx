import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Check,
} from "lucide-react";
import { notFound } from "next/navigation";

// Datos reales de eventos
const eventos = [
  {
    id: 1,
    title: "II Seminario de Geotecnia y Mecánica de Rocas - 2025",
    date: "11-14 Febrero, 2025",
    location: "Quito, Ecuador",
    image:
      "/images/eventos/ii-seminario-de-geotecnia-y-mecanica-de-rocas-2025.webp",
    description:
      "El II Seminario de Geotecnia y Mecánica de Rocas reunió a autoridades del sector minero, expertos nacionales e internacionales, representantes estatales, gerentes de empresas, instituciones académicas y estudiantes para compartir conocimientos y experiencias sobre los avances más recientes en estabilidad de taludes, diseño de túneles e innovación geotécnica aplicada a la minería. Este evento se consolidó como un espacio clave para la formación técnica, la colaboración interinstitucional y el fortalecimiento del desarrollo sostenible del sector minero en el país y la región.",
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
    tematicas: [
      "Estabilidad de taludes",
      "Diseño de túneles",
      "Técnicas de monitoreo",
      "Avances en modelación geotécnica",
    ],
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 2,
    title:
      "Presentación de Resultados del Laboratorio Social de Innovación Energético Minero",
    date: "15 Enero, 2025",
    location: "Universidad UTE, Quito",
    image: "/images/eventos/resultados-laboratorio-social-innovacion.webp",
    description:
      "El evento reunió a representantes de instituciones públicas y privadas, academia, gremios técnicos y sociedad civil, quienes participaron activamente en la presentación de los resultados obtenidos a través de los talleres multisectoriales realizados durante el año 2024.",
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
    frase:
      "Juntos construimos un mejor futuro para el sector minero y nuestro país.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 3,
    title:
      "IV Taller Multisectorial sobre Gobernanza en el Sector Minero – Ibarra 2024",
    date: "12 Diciembre, 2024",
    location: "Ibarra, Ecuador",
    image: "/images/eventos/iv-taller-multisectorial-gobernanza-ibarra.webp",
    description:
      "La ciudad de Ibarra fue sede del IV Taller Multisectorial sobre Gobernanza en el Sector Minero, un espacio que convocó a representantes del gobierno, la industria minera, la academia y la sociedad civil para reflexionar en conjunto sobre el presente y futuro de la minería en Ecuador. Este evento forma parte de una serie de talleres desarrollados por AIME en distintas regiones del país, con el objetivo de construir una hoja de ruta compartida hacia una minería más sostenible, responsable e inclusiva.",
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
    title:
      "III Taller Multisectorial sobre Gobernanza en el Sector Minero – Loja 2024",
    date: "21 Noviembre, 2024",
    location: "Universidad Nacional de Loja",
    image: "/images/eventos/iii-taller-multisectorial-sobre-gobernanza-en-el-sector-minero.webp",
    description:
      "La AIME continúa promoviendo espacios de construcción colectiva para el fortalecimiento de la gobernanza minera en Ecuador. El III Taller Multisectorial, realizado en la ciudad de Loja, congregó a representantes de diversos sectores como estudiantes y docentes universitarios, empresarios del sector minero, autoridades ministeriales, líderes comunitarios y sociedad civil. Este evento es parte de una iniciativa que comenzó con encuentros previos en la Universidad UTE y la Universidad Central del Ecuador, con el fin de construir una hoja de ruta para una minería alineada con los Objetivos de Desarrollo Sostenible (ODS) y la Agenda 2030.",
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
    location: "Quito, Ecuador",
    image: "/images/eventos/xix-encuentro-anual-de-mineria-enaep-2024.webp",
    description:
      "La AIME, representada por su presidente Ing. Flavio Granizo, participó activamente en el XIX Encuentro Anual de Minería (ENAEP 2024), uno de los foros más relevantes del sector minero en Ecuador. Este espacio reunió a líderes nacionales e internacionales para analizar los principales desafíos y oportunidades de la minería en el país.",
    slug: "aime-encuentro-anual-mineria-enaep-2024",
    temas: [
      "Sostenibilidad y buenas prácticas ambientales",
      "Inclusión y liderazgo de las mujeres en minería",
      "Transición energética y el rol del sector minero",
      "Lucha contra la minería ilegal y desafíos regulatorios",
    ],
    compromiso:
      "AIME reafirmó su compromiso con la minería responsable, el impulso a la transparencia, el fortalecimiento técnico del sector y la construcción de una industria más inclusiva, sostenible y orientada al desarrollo nacional.",
    frase:
      "La minería del futuro se construye con sostenibilidad, inclusión y compromiso colectivo.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Revisión Técnica del Estándar Consolidado para Minería",
    date: "Octubre-Noviembre, 2024",
    location: "Sede AIME, Quito",
    image: "/images/eventos/revision-tecnica-del-estandar-consolidado-para-mineria.webp",
    description:
      "La Asociación de Ingenieros de Minas del Ecuador (AIME), a través de la CESSA, participó activamente en la revisión técnica del Estándar Consolidado para Minería, una propuesta que busca elevar las prácticas mineras en Ecuador hacia un modelo más ético, responsable y sostenible.",
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
];

export default function EventoDetallePage({
  params,
}: {
  params: { slug: string };
}) {
  // Buscar el evento correspondiente al slug
  const evento = eventos.find((evento) => evento.slug === params.slug);

  // Si no se encuentra el evento, mostrar 404
  if (!evento) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12">
      <div className="mb-8">
        <Button variant="ghost" className="group" asChild>
          <Link href="/eventos" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Volver a eventos
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {evento.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-muted px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{evento.date}</span>
            </div>
            {/* {evento.time && (
              <div className="flex items-center bg-muted px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>{evento.time}</span>
              </div>
            )} */}
            <div className="flex items-center bg-muted px-3 py-1 rounded-full">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>{evento.location}</span>
            </div>
          </div>
        </header>

        {/* Imagen principal del evento */}
          <Image
            src={evento.image || "/placeholder.svg"}
            alt={evento.title}
            width={1090}
            height={600}
            className="object-cover rounded-md"
          />

        {/* Descripción del evento */}
        <div className="prose max-w-none my-8">
          <h2 className="text-2xl font-bold mb-4">Descripción</h2>
          <p className="text-lg">{evento.description}</p>
        </div>

        {/* Detalles específicos del evento */}
        <div className="space-y-8 mb-12">
          {/* Objetivo */}
          {evento.objetivo && (
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Objetivo
              </h3>
              <p>{evento.objetivo}</p>
            </div>
          )}

          {/* Destacados / Temas / Ejes */}
          {(evento.destacados ||
            evento.tematicas ||
            evento.temas ||
            evento.ejes ||
            evento.pilares) && (
            <div>
              <h3 className="text-xl font-bold mb-3">
                {evento.destacados
                  ? "Aspectos Destacados"
                  : evento.tematicas
                  ? "Temáticas Relevantes"
                  : evento.temas
                  ? "Temas Clave"
                  : evento.ejes
                  ? "Ejes del Estándar"
                  : evento.pilares
                  ? "Pilares Fundamentales"
                  : "Puntos Clave"}
              </h3>
              <ul className="space-y-2">
                {(
                  evento.destacados ||
                  evento.tematicas ||
                  evento.temas ||
                  evento.ejes ||
                  evento.pilares ||
                  []
                ).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resultados */}
          {evento.resultados && (
            <div>
              <h3 className="text-xl font-bold mb-3">Resultados</h3>
              <ul className="space-y-2">
                {evento.resultados.map((resultado, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{resultado}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Equipo */}
          {evento.equipo && (
            <div>
              <h3 className="text-xl font-bold mb-3">Equipo de Trabajo</h3>
              <ul className="space-y-2">
                {evento.equipo.map((miembro, index) => (
                  <li key={index} className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{miembro}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impacto */}
          {evento.impacto && (
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Impacto</h3>
              <p>{evento.impacto}</p>
            </div>
          )}

          {/* Frase destacada */}
          {evento.frase && (
            <div className="border-l-4 border-primary pl-4 py-2 italic">
              <p className="text-lg">"{evento.frase}"</p>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
