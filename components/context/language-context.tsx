"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "mn" | "en";

const LanguageContext = createContext<{
  language: Lang;
  setLanguage: (l: Lang) => void;
}>({ language: "mn", setLanguage: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("mn");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) setLanguage(saved);
  }, []);

  const handleSet = (l: Lang) => {
    setLanguage(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSet }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
