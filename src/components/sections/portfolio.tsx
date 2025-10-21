"use client";
import { useState } from "react";
import { portfolioVideos } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = portfolioVideos[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioVideos.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + portfolioVideos.length) % portfolioVideos.length
    );
  };

  const videoVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <section id="portfolio" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVideo.id}
          className="absolute inset-0 z-0"
          variants={videoVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${activeVideo.youtubeId}`}
            title={activeVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end pb-16 text-primary-foreground">
        <div className="text-center px-4">
          <motion.h2
            key={activeVideo.id + "-title"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline"
          >
            {activeVideo.title}
          </motion.h2>
          <motion.p
            key={activeVideo.id + "-desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 max-w-3xl mx-auto text-foreground/80 md:text-lg"
          >
            {activeVideo.description}
          </motion.p>
        </div>
      </div>

      <div className="absolute z-20 left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {portfolioVideos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setActiveIndex(index)}
            className="w-3 h-3 rounded-full transition-colors"
            style={{
              backgroundColor:
                index === activeIndex ? "hsl(var(--primary))" : "hsla(var(--foreground), 0.5)",
            }}
            aria-label={`Ir para o vídeo ${video.title}`}
          />
        ))}
      </div>
    </section>
  );
}
