import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import FacebookIntegration from "./facebook-integration"

export default function PublicacionesPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-1 w-10 bg-primary"></div>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Noticias y Actualizaciones
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-8">Publicaciones</h1>

      <p className="text-lg mb-8">
        Mantente al día con las últimas noticias, eventos y actividades de la Asociación de Ingenieros en Minas del
        Ecuador. Aquí encontrarás nuestras publicaciones más recientes de redes sociales y boletines informativos.
      </p>

      <Tabs defaultValue="facebook" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="boletines">Boletines</TabsTrigger>
        </TabsList>
        <TabsContent value="facebook" className="mt-6">
          <FacebookIntegration />
        </TabsContent>
        <TabsContent value="boletines" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Boletín Informativo - Edición {item}</h3>
                    <p className="text-muted-foreground mb-4">Abril 2024</p>
                    <p className="mb-4">
                      Resumen de las actividades más importantes del mes, incluyendo eventos, capacitaciones y noticias
                      del sector minero.
                    </p>
                    <a href="#" className="text-primary hover:underline">
                      Descargar PDF
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

