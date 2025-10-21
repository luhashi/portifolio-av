"use client";
import { useState } from "react";
import { portfolioVideos } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = portfolioVideos[activeIndex];

  const videoVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <section id="portfolio" className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
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
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12 text-center">
            <AnimatePresence mode="out-in">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                  {activeVideo.title}
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-base">
                  {activeVideo.description}
                </p>
              </motion.div>
            </AnimatePresence>
        </div>
        
        <div className="pb-8">
          <div className="container mx-auto">
            <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto">
              {portfolioVideos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative shrink-0 w-24 h-14 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === activeIndex ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="transition-transform duration-300 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}