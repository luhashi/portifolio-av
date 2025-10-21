import { AnimatedSection } from "../animated-section";
import { ContactForm } from "../contact-form";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Vamos criar algo incrível juntos?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Tem um projeto em mente? Uma ideia para um vídeo? Ou só quer trocar uma ideia sobre audiovisual? Me mande uma mensagem!
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
