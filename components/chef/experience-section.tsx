"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function ExperienceSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);
  const experiences = [
    {
      period: "2011 – 2013",
      title:
        language === "en" ? "Cook / Assistant Cook" : "Тогооч / Туслах Тогооч",
      company: language === "en" ? "Pelas Restaurant" : "Пэлас Ресторан",
      description:
        language === "en"
          ? "Developed foundational culinary skills and learned the intricacies of professional kitchen management while preparing a variety of dishes."
          : "Их хэмжээний хоол бэлтгэх үндсэн ур чадвараа хөгжүүлж, мэргэжлийн гал тогооны менежментийн нарийн ширийн зүйлсийг сурсан.",
    },
    {
      period: "2014 – 2016",
      title: language === "en" ? "Senior Cook" : "Ахлах Тогооч",
      company:
        language === "en" ? "Mongoo's Restaurant" : "Мөнгөөгийн Ресторан",
      description:
        language === "en"
          ? "Managed daily kitchen operations and led a team of cooks in preparing a variety of dishes."
          : "Гал тогооны үйл ажиллагаа болон цэсийн хөгжүүлэлтийг удирдаж, ресторанг тодорхойлсон онцгой хоолнуудыг бүтээсэн.",
    },
    {
      period: "2016 – 2018",
      title: language === "en" ? "Chief Chef" : "Ахлах Тогооч",
      company:
        language === "en"
          ? "Mongolian Quest Chef Company"
          : "Монголиан Квест Жуулчны Компани",
      description:
        language === "en"
          ? "Responsible for providing authentic Mongolian cuisine to a diverse clientele."
          : "Жуулчдын хоолны үйлчилгээ болон олон улсын зочдод жинхэнэ Монгол хоолны туршлагыг бүтээх үүргийг хариуцсан.",
    },
    {
      period: "2018 – Одоо",
      title:
        language === "en"
          ? "General Chef / Event Planner"
          : "Ерөнхий Тогооч / Арга хэмжээ зохион байгуулагч",
      company:
        language === "en"
          ? "Highland Park Members Club"
          : "Highland Park Members Club",
      description:
        language === "en"
          ? "Managed daily kitchen operations and led a team of cooks in preparing a variety of dishes."
          : "Гал тогооны үйл ажиллагааг удирдаж, VIP зоогийн үйлчилгээг хариуцан ажиллаж байна. Томоохон арга хэмжээ болон онцгой зоогийн туршлагыг зохион байгуулдаг.",
    },
  ];
  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-secondary/30 relative"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            {language === "en" ? "Work Experience" : "Ажлын туршлага"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            {language === "en" ? "Career Path" : "Мэргэжлийн Замнал"}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 top-25 bottom-22 w-px bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                className={`absolute top-25 rounded-full bg-primary border-4 border-background ${
                  index === experiences.length - 1 ? "w-4.5 h-4.5" : "w-4 h-4"
                } ${
                  index % 2 === 0
                    ? "left-[-7px] md:left-auto md:right-[calc(50%-8px)]"
                    : "left-[-7px] md:left-[calc(50%-8px)]"
                }`}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-6 rounded-sm border transition-colors ${
                  index === experiences.length - 1
                    ? "bg-primary/5 border-primary/40 hover:border-primary"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{exp.period}</span>
                  {index === experiences.length - 1 && (
                    <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {language === "mn" ? "Одоогийн" : "Current"}
                    </span>
                  )}
                </div>
                <h3
                  className={`font-serif text-xl mb-1 ${
                    index === experiences.length - 1
                      ? "text-foreground text-2xl"
                      : "text-foreground"
                  }`}
                >
                  {exp.title}
                </h3>
                <p className="text-primary/80 text-sm mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
