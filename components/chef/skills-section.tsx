"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Users,
  CalendarDays,
  Crown,
  Utensils,
  Building,
  ChefHat,
} from "lucide-react";
import { useLanguage } from "../context/language-context";

export function SkillsSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const skills = [
    {
      icon: Users,
      title:
        language === "en" ? "Leadership Excellence" : "Манлайллын ур чадвар",
      description:
        language === "en"
          ? "Leading and inspiring high-performance culinary teams"
          : "Өндөр гүйцэтгэлтэй гал тогооны багийг манлайлан удирдах",
    },
    {
      icon: CalendarDays,
      title:
        language === "en" ? "Gastronomic Events" : "Гастрономи арга хэмжээ",
      description:
        language === "en"
          ? "Designing and executing premium dining experiences"
          : "Дээд зэрэглэлийн хоолны туршлага бүхий арга хэмжээ зохион байгуулах",
    },
    {
      icon: Crown,
      title: language === "en" ? "Luxury Catering" : "Тансаг зоогийн үйлчилгээ",
      description:
        language === "en"
          ? "Exclusive dining services for elite clientele"
          : "Онцгой зочдод зориулсан дээд зэрэглэлийн үйлчилгээ",
    },
    {
      icon: Utensils,
      title: language === "en" ? "Mongolian Gastronomy" : "Монгол гастрономи",
      description:
        language === "en"
          ? "Elevating traditional flavors with modern techniques"
          : "Уламжлалт амтыг орчин үеийн техникээр шинэчлэх",
    },
    {
      icon: Building,
      title:
        language === "en" ? "European Fine Cuisine" : "Европын fine dining",
      description:
        language === "en"
          ? "Refined techniques with contemporary presentation"
          : "Сонгодог техник, орчин үеийн plating хослол",
    },
    {
      icon: ChefHat,
      title: language === "en" ? "Kitchen Leadership" : "Гал тогооны манлайлал",
      description:
        language === "en"
          ? "Strategic and operational kitchen management"
          : "Гал тогооны стратеги болон үйл ажиллагааны удирдлага",
    },
  ];
  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
      id="skills"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            {language === "en" ? "Skills" : "Мэргэшил"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            {language === "en" ? "Culinary Expertise" : "Хоолны Урлаг"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card border border-border rounded-sm p-6 h-full relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  className="absolute inset-0 bg-primary"
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <skill.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
