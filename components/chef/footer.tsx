import { ChefHat } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ChefHat className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl text-foreground">
              {language === "en" ? "Ganhuyag Saindai" : "Ганхуяг Сайндай"}
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            {language === "en"
              ? "Since 2008, we have been creating delicious cuisine"
              : "2008 оноос хоолны урлаг бүтээж байна"}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {language === "en" ? "Privacy Policy" : "Нууцлал"}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {language === "en" ? "Terms of Service" : "Нөхцөл"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
