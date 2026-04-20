"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ChefHat, Menu, X } from "lucide-react";
import { useLanguage } from "../context/language-context";
import FlagSwitch from "./lang-toggle";

export function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { label: language === "mn" ? "Миний тухай" : "About", href: "#about" },
    {
      label: language === "mn" ? "Туршлага" : "Experience",
      href: "#experience",
    },
    { label: language === "mn" ? "Мэргэшил" : "Skills", href: "#skills" },
    { label: language === "mn" ? "Зураг" : "Gallery", href: "#gallery" },
    { label: language === "mn" ? "Арга хэмжээ" : "Events", href: "#events" },
    { label: language === "mn" ? "Холбоо барих" : "Contact", href: "#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              >
                <ChefHat className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="font-serif sm:text-xl text-foreground text-md">
                {language === "mn" ? "Ганхуяг. С" : "Ganhuyag. S"}
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <div className="flex gap-4">
                <FlagSwitch
                  language={language}
                  onToggle={() => {
                    const newLang = language === "mn" ? "en" : "mn";
                    setLanguage(newLang);
                    localStorage.setItem("lang", newLang);
                  }}
                />
                <motion.button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 gap-1 transition-colors text-sm"
                >
                  <a
                    href="/Gankhuyag-CV.pdf"
                    download="Gankhuyag-CV.pdf"
                    className="w-full bg-primary text-primary-foreground px-2 py-1.5 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 gap-1 transition-colors text-sm"
                  >
                    <span>{language === "mn" ? "CV " : "Download "}</span>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {language === "mn" ? " татах" : " CV"}
                    </motion.div>
                  </a>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="absolute right-0 top-0 bottom-0 w-64 bg-card border-l border-border p-6 pt-20"
        >
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-border w-fit flex items-center gap-4">
              <FlagSwitch
                language={language}
                onToggle={() => {
                  const newLang = language === "mn" ? "en" : "mn";
                  setLanguage(newLang);
                  localStorage.setItem("lang", newLang);
                }}
              />
              <motion.button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground px-2 py-1.5 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 gap-1 transition-colors text-sm"
              >
                <a
                  href="/Gankhuyag-CV.pdf"
                  download="Gankhuyag-CV.pdf"
                  className="w-full bg-primary text-primary-foreground px-2 py-1.5 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 gap-1 transition-colors text-sm"
                >
                  <span>{language === "mn" ? "CV татах" : "Download CV"}</span>
                </a>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
