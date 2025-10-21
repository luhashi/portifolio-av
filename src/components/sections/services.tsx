import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";
import { AnimatedSection } from "../animated-section";

export function Services() {
  return (
    <AnimatedSection id="services" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">O que eu faço</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Da concepção à finalização, ofereço soluções completas em audiovisual.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 border-transparent bg-background/50 hover:border-accent transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0 mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
