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
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end text-primary-foreground">
        <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pb-24 md:pb-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              key={activeVideo.id + "-title"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline"
            >
              {activeVideo.title}
            </motion.h2>
            <motion.p
              key={activeVideo.id + "-desc"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 max-w-3xl mx-auto text-foreground/80 md:text-base"
            >
              {activeVideo.description}
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-black/30 backdrop-blur-sm">
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
    </section>
  );
}
