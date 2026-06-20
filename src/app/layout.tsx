import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Fitness | Entrenador Personal Online",
  description:
    "Entrenamiento personalizado online con seguimiento semanal. Planes 100% adaptados a ti para transformar tu cuerpo con resultados reales.",
  keywords: [
    "entrenador personal online",
    "entrenamiento personalizado",
    "coaching fitness",
    "pérdida de grasa",
    "ganar músculo",
    "Chris Fitness",
  ],
  openGraph: {
    title: "Chris Fitness | Entrenador Personal Online",
    description:
      "Transforma tu cuerpo con un método personalizado y seguimiento semanal real.",
    url: "https://chrisfitness.online",
    siteName: "Chris Fitness",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${bebas.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
