"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/language-context";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Cattering", category: "Хоол", image: "/cattering.jpeg" },
  {
    id: 2,
    title: "10 метрийн BBQ",
    category: "Арга хэмжээ",
    image: "/10metr-team.jpeg",
  },
  {
    id: 3,
    title: "Horica 2024",
    category: "Masterclass",
    image: "/horica-2024.jpeg",
  },
  {
    id: 4,
    title: "Horica 2026",
    category: "Masterclass",
    image: "/horica-2026.jpeg",
  },
  {
    id: 5,
    title: "Horica Team",
    category: "Шагнал",
    image: "/horica2026team.jpeg",
  },
  {
    id: 6,
    title: "Hospitality",
    category: "Event",
    image: "/hospitality-2022.jpeg",
  },
];

export function GallerySection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1,
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-secondary/30" id="gallery">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            {language === "en" ? "Portfolio" : "Портфолио"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            {language === "en" ? "Culinary Gallery" : " Хоолны Галерей"}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {language === "en"
              ? "A showcase of our culinary creations and memorable events"
              : "Онцгой бүтээлүүд болон дурсамжтай арга хэмжээнүүдийн дүрслэл"}
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className={`relative cursor-pointer group md:row-span-2`}
            >
              <div
                className={`relative bg-card border border-border rounded-sm overflow-hidden aspect-square
                `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <span className="text-primary text-xs tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  initial={{ width: 0, height: 0 }}
                  whileHover={{ width: "100%", height: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 border-t-2 border-l-2 border-primary"
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about adding photos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground/60 text-sm mt-8"
        >
          {language === "en"
            ? "More photos will be added soon..."
            : "Илүү олон зургууд нэмэгдэх болно..."}
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 text-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-card border border-border rounded-sm w-[80vw] h-[70vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                fill
                className="object-contain"
                sizes="80vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm text-center">
                <h3 className="font-serif text-xl text-foreground">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-primary text-sm mt-1">
                  {galleryItems[selectedImage].category}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
