"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Users, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/language-context";

export function AboutSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: language === "mn" ? "Жилийн туршлага" : "Years of Experience",
    },
    {
      icon: Users,
      value: "2800+",
      label: language === "mn" ? "Нэг удаагийн зочид" : "Regular Customers",
    },
    {
      icon: Utensils,
      value: "10м",
      label: language === "mn" ? "BBQ байгууламж" : "BBQ Setup",
    },
    {
      icon: MapPin,
      value: "3+",
      label: language === "mn" ? "Улс оронд" : "Countries",
    },
  ];
  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
      id="about"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 text-[40vw] font-serif text-primary leading-none"
        >
          &
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 bg-secondary rounded-sm overflow-hidden relative group">
              {/* Replace with actual photo */}

              <Image
                src={"/mobile-hero.jpeg"}
                alt="Chef's Photo"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />

              {/* Decorative frame */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
            >
              {language === "mn" ? "Миний тухай" : "About Me"}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6"
            >
              {language === "mn" ? "Амтыг мэдрэх аялал" : "Taste Journey"}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                {language === "mn"
                  ? "Монгол орны Увс аймгийн уудам талд төрсөн би хоолны урлагийн замналаа Монгол хоолны баялаг уламжлалаас эхэлсэн. 15 гаруй жилийн турш би нэр хүндтэй газруудад ур чадвараа сайжруулж, өөрийн өвийн хүчтэй амтыг Европын боловсронгуй техниктэй хослуулсан."
                  : "Born in the vast steppes of Uvs province in Mongolia, my culinary journey began with the rich traditions of Mongolian cuisine. Over 15 years, I honed my skills in prestigious kitchens, blending the bold flavors of my heritage with refined European techniques."}
              </p>
              <p>
                {language === "mn"
                  ? "Highland Park Members Club-ын Ахлах Тогоочийн хувьд би гал тогооны үйл ажиллагааг удирдан зохион байгуулж, 2,800 гаруй зочидтой томоохон арга хэмжээнээс эхлээд жижиг цугларалт хүртэл VIP зоогийн үйлчилгээг зохион байгуулдаг."
                  : "As the Head Chef at Highland Park Members Club, I oversee the culinary operations, from large-scale events to intimate gatherings, ensuring exceptional service for our distinguished guests."}
              </p>
              <p>
                {language === "mn"
                  ? "Миний 10 метрийн BBQ байгууламж хоолны наадмуудад алдаршсан бөгөөд галаар хоол хийх эртний урлагийг дүрслэн харуулсан гайхалтай хоолны туршлагыг бүтээдэг."
                  : "My 10-meter BBQ setup has gained recognition among food enthusiasts, showcasing the art of grilling with a unique blend of traditional and modern techniques."}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-serif text-3xl text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
