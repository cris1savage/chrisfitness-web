import AnimateIn from "@/components/ui/AnimateIn";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const steps = [
  {
    title: "Me escribes por WhatsApp",
    desc: "Sin formularios. Me cuentas tu situación, tus objetivos y tus limitaciones. En menos de 24h te respondo con todo lo que necesito saber.",
    badge: null,
  },
  {
    title: "Diseño tu plan 100% personalizado",
    desc: "Creo tu rutina adaptada a tu nivel, tu horario, tu material y tus objetivos reales. Con vídeos de referencia para cada ejercicio. Nada genérico.",
    badge: null,
  },
  {
    title: "Empiezas a entrenar desde el día 1",
    desc: "Comienzas con instrucciones claras, vídeos de cada ejercicio y acceso directo a mí. Sin perderte ni un día, sin dudas sin respuesta.",
    badge: "Lo más valorado por mis clientes",
  },
  {
    title: "Revisión semanal de tu progreso",
    desc: "Cada semana analizamos cómo ha ido, hacemos ajustes si es necesario y resolvemos lo que haga falta. No entrenas a ciegas.",
    badge: null,
  },
  {
    title: "Apoyo diario por WhatsApp",
    desc: "Sin esperar al lunes. Cualquier duda — técnica, nutricional, de motivación — la resuelves el mismo día que surge.",
    badge: "Todos los días, sin excepción",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6" id="proceso">
      <div className="max-w-2xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-[#00CFFF] font-body text-xs font-semibold tracking-[0.25em] uppercase border border-[#00CFFF]/30 rounded-full px-4 py-1.5 mb-8">
            El proceso
          </span>
          <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
            ¿CÓMO FUNCIONA
            <br />
            <span className="text-[#00CFFF]">EXACTAMENTE?</span>
          </h2>
          <div className="w-12 h-px bg-[#00CFFF]/30 mx-auto" />
        </AnimateIn>

        <div>
          {steps.map((step, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.07}>
              <div className="border-t border-white/10 py-8 flex gap-5 sm:gap-8">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#00CFFF]/60 flex items-center justify-center mt-0.5">
                  <span className="font-display text-[#00CFFF] text-base leading-none">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-white font-bold text-base sm:text-lg leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  {step.badge && (
                    <span className="inline-flex items-center gap-1.5 mt-4 text-[#00CFFF] font-body text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#00CFFF]/40 rounded-full px-3 py-1">
                      <span className="text-yellow-400">★</span>
                      {step.badge}
                    </span>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <AnimateIn className="text-center mt-12" delay={0.2}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00CFFF] text-[#0A0A0A] font-body font-bold text-sm px-8 py-4 rounded-full hover:bg-white transition-all duration-200 hover:scale-105"
          >
            Empieza ahora — WhatsApp
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
