"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { Stagger } from "@/components/ui/AnimateIn";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const badges = [
  { icon: "🔒", title: "Garantía real",      sub: "Sin condiciones ocultas" },
  { icon: "📱", title: "WhatsApp directo",   sub: "Respuesta en menos de 24h" },
  { icon: "🎯", title: "Plan único",         sub: "Diseñado solo para ti" },
];

export default function Guarantee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="section-dark py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Big number with scale animation */}
        <div ref={ref} className="inline-flex items-end gap-2 mb-8">
          <motion.span
            className="font-display text-[#00CFFF] text-[120px] sm:text-[160px] leading-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            90
          </motion.span>
          <motion.span
            className="font-display text-white/40 text-3xl sm:text-4xl mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            DÍAS
          </motion.span>
        </div>

        <AnimateIn direction="up" delay={0.1}>
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-none mb-8">
            O TE DEVUELVO EL DINERO
          </h2>
          <p className="text-white/60 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Sí, así de claro. Si en 90 días no notas progreso real,{" "}
            <span className="text-white font-semibold">
              te devuelvo el dinero sin líos ni letra pequeña.
            </span>
          </p>
          <p className="text-white/40 font-body text-sm mb-12 max-w-xl mx-auto">
            Confío al 100% en mi método y en lo que puede hacer por ti.
            Por eso me atrevo a ofrecer esta garantía.
          </p>
        </AnimateIn>

        <Stagger
          className="grid grid-cols-3 gap-3 sm:gap-5 mb-14 w-full max-w-2xl mx-auto"
          staggerDelay={0.1}
          baseDelay={0.2}
          direction="up"
        >
          {badges.map(({ icon, title, sub }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5 sm:px-7 text-center sm:text-left hover:bg-white/10 hover:border-[#00CFFF]/40 transition-all duration-300"
            >
              <span className="text-xl sm:text-2xl block mb-2">{icon}</span>
              <p className="font-body font-semibold text-white text-xs sm:text-sm leading-tight">{title}</p>
              <p className="font-body text-white/40 text-[10px] sm:text-xs mt-0.5 hidden sm:block">{sub}</p>
            </div>
          ))}
        </Stagger>

        <AnimateIn delay={0.3}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00CFFF] text-[#0A0A0A] font-body font-bold text-base px-10 py-5 rounded-full hover:bg-white transition-all duration-200 hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Empezar con garantía incluida
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
