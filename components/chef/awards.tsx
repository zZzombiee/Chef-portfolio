"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Medal, Star, Trophy } from "lucide-react";
import { useLanguage } from "../context/language-context";

const competitions = {
  mn: {
    label: "Олон улсын тэмцээн, уралдаан",
    event: 'Олон Улсын А зэрэглэлийн "Chinggis Khaan Challenge Cup 2023"',
    medals: [
      {
        text: "Загас, далайн бүтээгдэхүүний төрөлд — АЛТАН МЕДАЛЬ",
        tier: "gold",
      },
      {
        text: "Залуучуудын Гран-При төрөлд (багаараа) — МӨНГӨН МЕДАЛЬ",
        tier: "silver",
      },
      {
        text: "Finger food буюу бэсрэг хоолны төрөлд — МӨНГӨН МЕДАЛЬ",
        tier: "silver",
      },
    ],
  },
  en: {
    label: "International competitions",
    event: '"Chinggis Khaan Challenge Cup 2023" International Class A',
    medals: [
      { text: "Fish & seafood category — GOLD MEDAL", tier: "gold" },
      {
        text: "Youth Grand Prix category (team) — SILVER MEDAL",
        tier: "silver",
      },
      { text: "Finger food category — SILVER MEDAL", tier: "silver" },
    ],
  },
};

const institutionalAwards = {
  mn: {
    label: "Байгууллагын шагнал",
    org: '"Highland Park Mongolia" ресторан',
    items: ['"Шилдэг ажилтан" (2019, 2020, 2021 онуудад дараалан шалгарсан)'],
  },
  en: {
    label: "Institutional award",
    org: '"Highland Park Mongolia" restaurant',
    items: ['"Best Employee" (awarded consecutively in 2019, 2020, 2021)'],
  },
};

const stateAwards = [
  {
    mn: {
      title: "Хөдөлмөрийн алдар одон",
      org: "Монголын тогооч нарын холбоо",
      year: "2022",
    },
    en: {
      title: "Labour Distinction Medal",
      org: "Mongolian Chefs Association",
      year: "2022",
    },
    icon: Medal,
  },
  {
    mn: {
      title: "Жуух бичиг",
      org: "Монгол Улсын Байгаль орчин, аялал жуулчлалын яам",
      year: "2022",
    },
    en: {
      title: "Certificate of Commendation",
      org: "Ministry of Environment & Tourism",
      year: "2022",
    },
    icon: Award,
  },
  {
    mn: {
      title: "Хийморь хүндэтгэлийн одон",
      org: "Монголын Үндэсний Худалдаа Аж Үйлдвэрийн Танхим",
      year: "2025",
    },
    en: {
      title: "Khiimori Honour Medal",
      org: "Mongolian National Chamber of Commerce & Industry",
      year: "2025",
    },
    icon: Star,
  },
];

const expertise = [
  {
    mn: {
      label: '"Hospitality-2022 expo"',
      text: "2022 оны 05 сарын 13-14-ний өдрүүдэд зохион байгуулагдсан тус арга хэмжээнд урилгаар оролцож, мэргэжлийн тогоочийн үзүүлбэр (Masterclass) үзүүлэн хоол хийсэн.",
    },
    en: {
      label: '"Hospitality-2022 expo"',
      text: "Participated by invitation on May 13–14, 2022 and delivered a professional chef Masterclass demonstration.",
    },
  },
  {
    mn: {
      label: '"Ментор/Багш"',
      text: 'ОХУ-д зохиогдсон дэлхийн ур чадварын "World Skills Kazan 2019" тэмцээнд Монгол улсаа төлөөлөн оролцсон тогооч Л.Чибаярын (одоо тус байгууллагад Ахлах тогоочоор дэвшин ажиллаж буй) тэмцээний бэлтгэлийг гардан хангаж, амжилттай чиглүүлэн ажилласан.',
    },
    en: {
      label: '"Mentor / Coach"',
      text: 'Personally coached chef L.Chibayr (now Senior Chef) who represented Mongolia at the "World Skills Kazan 2019" competition in Russia, successfully guiding their preparation.',
    },
  },
];

export function AwardsSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lang = language as "mn" | "en";

  return (
    <section ref={ref} className="py-32 px-6" id="awards">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            {lang === "mn" ? "Амжилтууд" : "Achievements"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4">
            {lang === "mn" ? "Гавьяа Шагнал" : "Awards & Honours"}
          </h2>
        </motion.div>

        {/* Competition medals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
            {competitions[lang].label}
          </p>
          <div className="border border-border rounded-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-primary shrink-0" />
              <p className="font-serif text-lg text-foreground">
                {competitions[lang].event}
              </p>
            </div>
            <div className="space-y-3">
              {competitions[lang].medals.map((medal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      medal.tier === "gold" ? "bg-amber-400" : "bg-zinc-400"
                    }`}
                  />
                  <p className="text-muted-foreground text-sm">{medal.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Institutional award */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
            {institutionalAwards[lang].label}
          </p>
          <div className="border border-border rounded-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <p className="font-serif text-lg text-foreground">
                {institutionalAwards[lang].org}
              </p>
            </div>
            {institutionalAwards[lang].items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/40 shrink-0" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* State & industry awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
            {lang === "mn"
              ? "Төрийн болон салбарын шагнал"
              : "State & industry honours"}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {stateAwards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-sm p-5 hover:border-primary/50 transition-colors group"
              >
                <award.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1">
                  {award[lang].title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {award[lang].org}
                </p>
                <span className="text-xs text-primary font-medium">
                  {award[lang].year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise & participation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
            {lang === "mn"
              ? "Мэргэжлийн онцлох оролцоо, ур чадвар"
              : "Professional highlights"}
          </p>
          <div className="space-y-4">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="border border-border rounded-sm p-6 hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-medium text-primary mb-2">
                  {item[lang].label}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item[lang].text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
