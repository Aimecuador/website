import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "Congreso Universitario de Minería Ecuamining, Salinas 2024",
    date: "30 de octubre de 2024",
    author: "Equipo AIME",
    categories: ["Eventos", "Educación", "Minería Sostenible"],
    slug: "aime-congreso-ecuamining-salinas-2024",
    imageUrl: "/images/blogs/congreso-ecuamining.webp",
  },
  {
    id: 2,
    title:
      "AIME y Viceministerio de Minas fortalecen la minería responsable en Ecuador",
    date: "25 de octubre de 2024",
    author: "Equipo AIME",
    categories: ["Cooperación Institucional", "Minería Responsable"],
    slug: "aime-viceministerio-mineria-responsable-ecuador",
    imageUrl: "/images/blogs/mineria-responsable.webp",
  },
  {
    id: 3,
    title:
      "Impulso a la minería responsable: Reflexiones del I Simposio Internacional sobre el potencial minero de Ecuador",
    date: "11 de octubre de 2024",
    author: "Equipo AIME",
    categories: ["Simposio", "Minería Sostenible", "Marco Legal"],
    slug: "impulso-mineria-responsable-simposio-ecuador",
    imageUrl: "/images/blogs/simposio-internacional.webp",
  },
  {
    id: 4,
    title:
      "Explorando la innovación y el conocimiento en el II Seminario de Geotecnia y Mecánica de Rocas",
    date: "28 de noviembre de 2024",
    author: "Equipo AIME",
    categories: ["Seminarios", "Geotecnia", "Innovación"],
    slug: "innovacion-seminario-geotecnia-mecanica-rocas",
    imageUrl: "/images/blogs/seminario-geotecnia.webp",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Buscar el post correspondiente al slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  // Si no se encuentra el post, mostrar 404
  if (!post) {
    notFound();
  }

  // Encontrar índice del post actual para navegación
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="container mx-auto py-12">
      <div className="mb-8">
        <Button variant="ghost" className="group" asChild>
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Volver al blog
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-primary" />
              <span>{post.categories.join(", ")}</span>
            </div>
          </div>
        </header>

        {/* Contenedor de imagen con proporción 3:4 */}
        <div className="mb-8">
          <div className="relative w-full max-w-4xl mx-auto pt-5 rounded-lg overflow-hidden shadow-md">
            {/* Imagen del artículo */}
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Navegación entre posts */}
        <div className="mt-12 flex justify-between">
          {prevPost ? (
            <Button variant="outline" className="group" asChild>
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Artículo anterior
              </Link>
            </Button>
          ) : (
            <div></div> // Espacio vacío para mantener la alineación
          )}

          {nextPost && (
            <Button variant="outline" className="group" asChild>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center"
              >
                Siguiente artículo
                <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>
      </article>
    </main>
  );
}
