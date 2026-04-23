"use client";

import { Navigation } from "@/components/chef/navigation";
import { HeroSection } from "@/components/chef/hero-section";
import { AboutSection } from "@/components/chef/about-section";
import { ExperienceSection } from "@/components/chef/experience-section";
import { SkillsSection } from "@/components/chef/skills-section";
import { GallerySection } from "@/components/chef/gallery-section";
import { EventsSection } from "@/components/chef/events-section";
import { ContactSection } from "@/components/chef/contact-section";
import { Footer } from "@/components/chef/footer";
import { CursorEffect } from "@/components/chef/cursor-effect";
import { useEffect, useState } from "react";
import { LanguageProvider } from "@/components/context/language-context";
import { AwardsSection } from "@/components/chef/awards";

export default function ChefPortfolio() {
  const [language, setLanguage] = useState<"mn" | "en">("mn");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as "mn" | "en";
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageProvider>
      <main className="relative">
        <CursorEffect />
        <Navigation />

        <HeroSection />

        <div id="about">
          <AboutSection />
        </div>

        <div id="experience">
          <ExperienceSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>
        <div id="awards">
          <AwardsSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>

        <div id="events">
          <EventsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
      </main>
    </LanguageProvider>
  );
}
