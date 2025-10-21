"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      {heroImage && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 text-center text-primary-foreground px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline"
        >
          Lucas Hashimoto
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl font-headline"
        >
          Produtor Audiovisual & Piloto de Drone FPV
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-6 max-w-[700px] text-foreground/80 md:text-lg"
        >
          Mais de 10 anos de experiência captando histórias através da câmera e do drone. Entre sets, voos e bastidores, busco traduzir emoção e técnica em cada frame.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Button asChild size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#portfolio">Ver Portfólio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
