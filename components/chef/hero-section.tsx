"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChefHat, Flame, Award } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/language-context";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { language } = useLanguage();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-secondary"
      >
        {/* Photo placeholder - replace with actual hero image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
            <div className="absolute inset-0 sm:flex items-center justify-center hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="text-[30vw] font-serif text-primary/20 select-none"
              >
                <Image
                  src="/Hero.jpeg"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute inset-0 items-center justify-center sm:hidden flex">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="text-[30vw] font-serif text-primary/20 select-none"
              >
                <Image
                  src="/mobile-hero-bg.jpeg"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [100, -100],
              x: [0, Math.sin(i) * 50],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${60 + i * 5}%`,
            }}
          >
            <Flame className="w-6 h-6 text-primary/30" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ChefHat className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            {language === "mn" ? "Ерөнхий Тогооч" : "Head Chef"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 text-balance"
        >
          {language === "mn" ? "Сайндайн Ганхуяг" : "Saindai Ganhuyag"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 text-pretty leading-relaxed"
        >
          {language === "mn"
            ? " Монгол болон Европын хоолны урлагт 15 гаруй жилийн туршлагатай, онцгой амтлах мэдрэмжээр хоол бүтээдэг"
            : "With 15 years of experience in Mongolian and European cuisine, I create unique dishes with a distinctive taste."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-primary" />
            <span>Highland Park Members Club</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-muted-foreground">
            {language === "mn"
              ? "Улаанбаатар, Монгол"
              : "Ulaanbaatar, Mongolia"}
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  {language === "mn" ? "Доош гүйлгэнэ үү" : "Scroll down"}
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
