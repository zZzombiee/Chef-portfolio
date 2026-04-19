"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Send, ChefHat } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function ContactSection() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full border border-primary/5 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
              {language === "en" ? "Contact Us" : "Холбоо барих"}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
              {language === "en"
                ? "Let's Create Something Delicious Together"
                : "Онцгой Зүйл Бүтээцгээе"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {language === "en"
                ? "If you need personal catering, corporate events, or culinary consulting services, feel free to reach out to us. We'll help make your vision a reality."
                : "Хувийн зоог, байгууллагын арга хэмжээ эсвэл хоолны зөвлөхийн үйлчилгээ хэрэгтэй бол надтай холбогдоорой. Таны алсын хараа бодит болгоход туслах болно."}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: language === "en" ? "Phone" : "Утас",
                  value: "+976 9912 6323",
                },
                {
                  icon: Phone,
                  label: language === "en" ? "Additional Phone" : "Нэмэлт утас",
                  value: "+976 7706 6683",
                },
                {
                  icon: MapPin,
                  label: language === "en" ? "Location" : "Байршил",
                  value:
                    language === "en"
                      ? "Ulaanbaatar, Mongolia"
                      : "Улаанбаатар, Монгол",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-card border border-border rounded-sm p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    {language === "en" ? "Name" : "Нэр"}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder={language === "en" ? "Your name" : "Таны нэр"}
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    {language === "en" ? "Email" : "Имэйл"}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder={
                      language === "en" ? "Your email" : "Таны имэйл"
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    {language === "en" ? "Event Type" : "Арга хэмжээний төрөл"}
                  </label>
                  <select className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option value="">
                      {language === "en"
                        ? "Select Event Type"
                        : "Арга хэмжээний төрөл сонгох"}
                    </option>
                    <option value="private">
                      {language === "en" ? "Private Event" : "Хувийн зоог"}
                    </option>
                    <option value="corporate">
                      {language === "en"
                        ? "Corporate Event"
                        : "Байгууллагын арга хэмжээ"}
                    </option>
                    <option value="wedding">
                      {language === "en" ? "Wedding" : "Хурим"}
                    </option>
                    <option value="festival">
                      {language === "en" ? "Festival" : "Хоолны наадам"}
                    </option>
                    <option value="consulting">
                      {language === "en" ? "Consulting" : "Зөвлөх үйлчилгээ"}
                    </option>
                    <option value="other">
                      {language === "en" ? "Other" : "Бусад"}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    {language === "en" ? "Message" : "Мессеж"}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder={
                      language === "en"
                        ? "Enter your message here..."
                        : "Арга хэмжээнийхээ талаар бичнэ үү..."
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-medium flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
                >
                  <span>
                    {language === "en" ? "Send Message" : "Мессеж илгээх"}
                  </span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
