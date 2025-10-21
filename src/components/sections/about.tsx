import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-photo");

  return (
    <AnimatedSection id="about" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Sobre Mim
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
              Sou Lucas Hashimoto, profissional de audiovisual com mais de 10 anos de experiência. Estudei Rádio, TV e Internet na Anhembi Morumbi e comecei minha trajetória como assistente de fotografia. Sou apaixonado por audiovisual e por estar em campo, vivendo a produção de perto. Trabalhei em diversas produtoras e agências como operador de câmera, primeiro assistente e piloto de drone, sempre buscando capturar imagens que contem histórias com impacto e autenticidade. Me adapto rápido a qualquer situação no set, encontrando soluções para que tudo saia da melhor forma possível.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
