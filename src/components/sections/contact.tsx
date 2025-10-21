import { AnimatedSection } from "../animated-section";
import { ContactForm } from "../contact-form";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
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
