"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Users,
  MapPin,
  Award,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "../context/language-context";

export function EventsSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const events = [
    {
      year: "2025",
      items: [
        {
          title: language === "mn" ? "Зочид буудлын Экспо" : "Guest House Expo",
          detail:
            language === "mn"
              ? "Олон улсын оролцоо"
              : "International Participation",
          icon: MapPin,
        },
        {
          title:
            language === "mn"
              ? "Террас Нээлтийн Үдэшлэг"
              : "Terrace Opening Event",
          detail: language === "mn" ? "Highland Park" : "Highland Park",
          icon: Award,
        },
        {
          title:
            language === "mn"
              ? "Монос Группийн 35 жилийн ой"
              : "Mono Group's 35th Anniversary",
          detail:
            language === "mn" ? "2800+ зочдын зоог" : "2800+ Guests' Dining",
          icon: Users,
        },
        {
          title:
            language === "mn"
              ? "Эв нэгдлийн өдрийн арга хэмжээ"
              : "Day of Unity Event",
          detail:
            language === "mn"
              ? "Томоохон зоогийн үйлчилгээ"
              : "Major Dining Experience",
          icon: Calendar,
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          title:
            language === "mn" ? "Зочломтгой байдлын Экспо" : "Guest House Expo",
          detail:
            language === "mn" ? "Мастер Класс - Хоол" : "Master Class - Food",
          icon: Award,
        },
        {
          title:
            language === "mn"
              ? "Horeca Mongolia Экспо"
              : "Horeca Mongolia Expo",
          detail:
            language === "mn" ? "Мастер Класс Илтгэгч" : "Master Class Speaker",
          icon: Award,
        },
        {
          title:
            language === "mn"
              ? "Тайландын олон улсын"
              : "Thailand International",
          detail:
            language === "mn"
              ? "Олон улсын оролцоо"
              : "International Participation",
          icon: MapPin,
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: language === "mn" ? "УБ Хоолны Наадам" : "UB Food Festival",
          detail:
            language === "mn"
              ? "10 метрийн BBQ Шууд хоол хийх"
              : "10-meter BBQ Direct Cooking",
          icon: Award,
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title:
            language === "mn"
              ? "Аялал жуулчлалын тусгай зоог"
              : "Special Travel and Tourism Event",
          detail:
            language === "mn" ? "Дээд зэргийн үйлчилгээ" : "Premium Service",
          icon: Users,
        },
        {
          title: language === "mn" ? "Монгол Банк VIP" : "Mongol Bank VIP",
          detail:
            language === "mn" ? "VIP зоогийн үйлчилгээ" : "VIP Guest Service",
          icon: Award,
        },
        {
          title:
            language === "mn"
              ? "Highland Park Арга хэмжээ"
              : "Highland Park Event",
          detail:
            language === "mn" ? "Ресторанын арга хэмжээ" : "Restaurant Event",
          icon: Calendar,
        },
      ],
    },
  ];
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  const xRef = useRef(0);

  useEffect(() => {
    if (!isInView || isDragging || trackWidth === 0) return;

    controls.start({
      x: [xRef.current, -trackWidth],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    return () => controls.stop();
  }, [isInView, isDragging, trackWidth, controls]);

  const doubled = [...events, ...events]; // duplicate for seamless loop

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
            {language === "mn" ? "Онцлох" : "Highlight"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            {language === "mn"
              ? "Онцлох Арга Хэмжээ & Төслүүд"
              : "Highlight Events & Projects"}
          </h2>
          <p className="text-muted-foreground mt-4">
            {language === "mn"
              ? "Жижиг VIP цугларалтаас мянга мянган зочдod үйлчилсэн наадам хүртэл"
              : "From small VIP gatherings to large-scale events with thousands of guests"}
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -trackWidth, right: 0 }}
          dragElastic={0.05}
          onDragStart={() => {
            setIsDragging(true);
            controls.stop();
          }}
          onDragEnd={(_, info) => {
            xRef.current = Math.max(
              -trackWidth,
              Math.min(0, xRef.current + info.offset.x),
            );
            setIsDragging(false);
          }}
          whileDrag={{ cursor: "grabbing" }}
          className="flex gap-8 px-6 pb-8 cursor-grab w-max"
        >
          {doubled.map((yearGroup, groupIndex) => (
            <motion.div
              key={`${yearGroup.year}-${groupIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: (groupIndex % events.length) * 0.1,
              }}
              className="shrink-0 w-[350px]"
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
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/50 text-xs tracking-widest uppercase select-none">
        <ChevronLeft className="w-3 h-3" />
        <span>{language === "mn" ? "чирж гүйлгэнэ үү" : "drag to scroll"}</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </section>
  );
}
