"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const stats = [
  ["100+", "Clientes transformados"],
  ["90 días", "Garantía de resultados"],
  ["24/7", "Seguimiento directo"],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chris/chris-hero.jpg"
          alt="Chris Fitness entrenador personal"
          fill
          className="object-cover object-center opacity-40"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Entrenador Personal Online
          </motion.p>

          {/* Headline — word by word */}
          <h1 className="font-display text-white leading-none mb-6">
            {["TRANSFORMA", "TU CUERPO.", "DE VERDAD."].map((line, i) => (
              <motion.span
                key={line}
                className={`block text-6xl sm:text-7xl lg:text-8xl ${i === 1 ? "text-[#00CFFF]" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-white/70 font-body text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Entrenamiento 100% personalizado con seguimiento semanal.
            Para personas que ya entrenan pero no ven resultados.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex"
          >
            {/* Subtle glow */}
            <span className="animate-pulse absolute -inset-1.5 rounded-full bg-[#00CFFF]/15 blur-sm" />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 bg-[#00CFFF] text-[#0A0A0A] font-body font-bold text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-200 hover:scale-105 active:scale-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Empieza ahora — WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10 mt-14 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map(([num, label], i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-[#00CFFF] text-4xl leading-none">{num}</p>
                <p className="text-white/50 font-body text-xs mt-1 tracking-wide">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
