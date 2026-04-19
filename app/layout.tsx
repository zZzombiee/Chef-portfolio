import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ганхуяг Сайндай | Ерөнхий Тогооч",
  description:
    "Монгол болон Европын хоолны урлагт 15 гаруй жилийн туршлагатай, VIP зоогийн үйлчилгээ, томоохон арга хэмжээнүүдэд мэргэшсэн ахлах тогооч.",
  icons: {
    icon: [
      {
        url: "/image2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/image2.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/image2.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
