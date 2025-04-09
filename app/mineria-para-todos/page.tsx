"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Calendar, Users, ExternalLink, Youtube } from "lucide-react";

export default function MineriaTodosPage() {
  // Datos de las temporadas
  const temporadas = [
    {
      numero: "Primera",
      fecha: "23 de septiembre de 2021",
      descripcion:
        "Marcó el lanzamiento del programa con entrevistas y paneles sobre la situación de la minería en el país, sus desafíos y oportunidades.",
      imagen: "/placeholder.svg?height=200&width=400&text=Primera+Temporada",
      color: "from-secondary/90 to-secondary/70",
    },
    {
      numero: "Segunda",
      fecha: "8 de febrero de 2022",
      descripcion:
        "Se transmitió todos los martes a las 19h00 a través de Facebook Live, consolidando el programa como un referente de educación minera digital.",
      imagen: "/placeholder.svg?height=200&width=400&text=Segunda+Temporada",
      color: "from-secondary/90 to-secondary/70",
    },
    {
      numero: "Tercera",
      fecha: "Octubre de 2023",
      descripcion:
        "Con una frecuencia quincenal, mantuvo el enfoque técnico y educativo, e integró nuevas temáticas como transición energética, innovación y responsabilidad social.",
      imagen: "/placeholder.svg?height=200&width=400&text=Tercera+Temporada",
      color: "from-secondary/90 to-secondary/70",
    },
  ];

  return (
    <main className="py-12">
      {/* Hero Section */}
      <section className="mb-16 container mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50"></div>
          <div className="relative z-10 px-6 py-16 md:py-24 md:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Minería para Todos
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Un programa de divulgación técnica y científica que acerca el
                conocimiento del sector minero a toda la ciudadanía ecuatoriana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-white text-primary hover:bg-white/90 transition-all"
                  size="lg"
                  onClick={() => {
                    const episodiosSection =
                      document.getElementById("episodios");
                    if (episodiosSection) {
                      episodiosSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Play className="mr-2 h-4 w-4" /> Ver episodios
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white hover:bg-white/20 transition-all"
                  size="lg"
                  asChild
                >
                  <Link
                    href="https://www.youtube.com/@asociaciondeingenierosdemi7834"
                    target="_blank"
                  >
                    <Youtube className="mr-2 h-4 w-4" /> Canal de YouTube
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción del programa */}
      <section className="mb-16 container mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Sobre el programa
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-6">¿Qué es Minería para Todos?</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 text-lg">
              <p>
                <span className="font-semibold">Minería para Todos</span> es un
                programa de divulgación técnica y científica creado por la
                Asociación de Ingenieros de Minas del Ecuador (AIME), con el
                respaldo de la Escuela Superior Politécnica del Litoral (ESPOL).
              </p>
              <p>
                Su objetivo principal es acercar el conocimiento del sector
                minero a toda la ciudadanía, generando espacios de diálogo con
                expertos nacionales e internacionales para compartir
                experiencias, buenas prácticas y avances tecnológicos que
                contribuyen a una minería responsable y sostenible en el país.
              </p>
              <p>
                A lo largo de sus temporadas, el programa ha contado con la
                participación de representantes de la academia, empresas
                privadas, instituciones públicas, gremios y comunidades,
                fomentando el entendimiento de la minería como una actividad
                estratégica para el desarrollo del Ecuador.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://img.youtube.com/vi/BYEAW8A1X4Y/maxresdefault.jpg"
              alt="Minería para Todos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Temporadas */}
      <section className="mb-16 container mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Evolución
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Calendar className="mr-3 h-8 w-8 text-primary" />
          Temporadas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {temporadas.map((temporada, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`h-3 w-full bg-gradient-to-r ${temporada.color}`}
              ></div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <h3 className="">
                    <span className="text-primary font-bold">
                      {temporada.numero}
                    </span>{" "}
                    Temporada
                  </h3>{" "}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Inicio: {temporada.fecha}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{temporada.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Episodios */}
      <section id="episodios" className="mb-16 scroll-mt-20 bg-muted py-12">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-1 w-10 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Contenido
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Play className="mr-3 h-8 w-8 text-primary" />
            Episodios
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://img.youtube.com/vi/BYEAW8A1X4Y/maxresdefault.jpg"
                alt="Minería para Todos - Playlist"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white transition-transform duration-300 hover:scale-110"
                  asChild
                >
                  <Link
                    href="https://www.youtube.com/watch?v=BYEAW8A1X4Y&list=PLmbzm9HyfWz2sOzDknmHskhq7NC6ZC7wI&index=1"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-5 w-5" /> Ver en YouTube
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Playlist completa en YouTube
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Play className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p>Más de 20 episodios con expertos del sector minero</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p>
                    Entrevistas con profesionales nacionales e internacionales
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p>
                    Contenido organizado por temporadas para facilitar su
                    visualización
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://www.youtube.com/playlist?list=PLmbzm9HyfWz2sOzDknmHskhq7NC6ZC7wI"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <Youtube className="h-5 w-5" /> Ver playlist completa
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dónde verlo */}
      <section className="mb-16 container mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Acceso
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <ExternalLink className="mr-3 h-8 w-8 text-primary" />
          ¿Dónde verlo?
        </h2>

        <div className="bg-muted p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <Youtube className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Canal oficial de YouTube
              </h3>
              <p className="text-lg mb-4">
                Todos los episodios están disponibles en nuestro canal oficial.
                Suscríbete para no perderte ningún contenido nuevo.
              </p>
              <Button size="lg" asChild>
                <Link
                  href="https://www.youtube.com/@asociaciondeingenierosdemi7834"
                  target="_blank"
                  className="flex items-center"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Visitar canal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="container mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-1 w-10 bg-primary"></div>
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Aliados
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Users className="mr-3 h-8 w-8 text-primary" />
          Colaboradores
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transition-all duration-300 hover:shadow-lg border-primary/50">
            <CardHeader>
              <CardTitle>AIME</CardTitle>
              <CardDescription>
                Asociación de Ingenieros de Minas del Ecuador
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Creadores del programa, comprometidos con la divulgación técnica
                y científica del sector minero ecuatoriano.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/nosotros">Conocer más</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-primary/50">
            <CardHeader>
              <CardTitle>ESPOL</CardTitle>
              <CardDescription>
                Escuela Superior Politécnica del Litoral
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Institución académica que respalda el programa, aportando
                conocimiento técnico y científico de alto nivel.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="https://www.espol.edu.ec/" target="_blank">
                  Visitar sitio
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
