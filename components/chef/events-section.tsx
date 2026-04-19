"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, MapPin, Award } from "lucide-react";

const events = [
  {
    year: "2025",
    items: [
      {
        title: "Зочид буудлын Экспо",
        detail: "Олон улсын оролцоо",
        icon: MapPin,
      },
      {
        title: "Террас Нээлтийн Үдэшлэг",
        detail: "Highland Park",
        icon: Award,
      },
      {
        title: "Монос Группийн 35 жилийн ой",
        detail: "2800+ зочдын зоог",
        icon: Users,
      },
      {
        title: "Эв нэгдлийн өдрийн арга хэмжээ",
        detail: "Томоохон зоогийн үйлчилгээ",
        icon: Calendar,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Зочломтгой байдлын Экспо",
        detail: "Мастер Класс - Хоол",
        icon: Award,
      },
      {
        title: "Horeca Mongolia Экспо",
        detail: "Мастер Класс Илтгэгч",
        icon: Award,
      },
      {
        title: "Тайландын олон улсын",
        detail: "Олон улсын оролцоо",
        icon: MapPin,
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "УБ Хоолны Наадам",
        detail: "10 метрийн BBQ Шууд хоол хийх",
        icon: Award,
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Аялал жуулчлалын тусгай зоог",
        detail: "Дээд зэргийн үйлчилгээ",
        icon: Users,
      },
      {
        title: "Монгол Банк VIP",
        detail: "VIP зоогийн үйлчилгээ",
        icon: Award,
      },
      {
        title: "Highland Park Арга хэмжээ",
        detail: "Ресторанын арга хэмжээ",
        icon: Calendar,
      },
    ],
  },
];

export function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-32 overflow-hidden" id="events">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            Онцлох
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            Онцлох Арга Хэмжээ & Төслүүд
          </h2>
          <p className="text-muted-foreground mt-4">
            Жижиг VIP цугларалтаас мянга мянган зочдод үйлчилсэн наадам хүртэл
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling cards */}
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -((events.length - 1) * 370) }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        dragElastic={0.1}
        whileDrag={{ cursor: "grabbing" }}
        className="flex gap-8 px-6 pb-8 cursor-grab"
      >
        {events.map((yearGroup, groupIndex) => (
          <motion.div
            key={yearGroup.year}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            className="shrink-0 w-87.5"
          >
            <div className="sticky top-0 mb-6">
              <motion.span
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                className="font-serif text-6xl text-primary/20 font-medium"
              >
                {yearGroup.year}
              </motion.span>
            </div>

            <div className="space-y-4">
              {yearGroup.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: groupIndex * 0.1 + itemIndex * 0.05,
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-card border border-border rounded-sm p-5 group hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}{" "}
      </motion.div>
    </section>
  );
}
