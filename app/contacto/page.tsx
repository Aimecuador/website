import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import SocialIcons from "@/components/social-icons"
import GoogleMapWrapper from "@/components/google-map"

export default function ContactoPage() {
  return (
    <main className="container mx-auto py-12">
      <section className="py-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-1 w-10 bg-primary"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Comunícate con nosotros
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contáctanos</h1>
            <p className="mt-4 text-muted-foreground">
              Estamos aquí para responder tus preguntas y ayudarte a conectar con la comunidad de ingenieros de minas de
              Ecuador.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Francisco de Orellana E4 -65 y 9 de Octubre, Quito, Ecuador{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">023238003 - 0968204060</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">secretaria@aimecuador.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Horario de Atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 8:00am - 17:00pm</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Síguenos</h3>
              <SocialIcons iconClassName="h-5 w-5" iconColor="text-gray-600 hover:text-primary" />
            </div>
          </div>

          <div>
            <form className="space-y-6 bg-muted p-6 rounded-lg">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="asunto" className="text-sm font-medium">
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <Button type="submit" className="w-full transition-all duration-300 hover:scale-[1.02]">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Ubicación</h2>
        </div>
        <GoogleMapWrapper />
      </section>
    </main>
  )
}

