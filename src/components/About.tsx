import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { Stagger } from "@/components/ui/AnimateIn";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const credentials = [
  "Titulado en culturismo natural",
  "Entrenador personal certificado",
  "Especialista en entrenamiento online",
  "Experto en hábitos y nutrición",
];

export default function About() {
  return (
    <section className="section-dark py-24 px-6" id="metodo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <AnimateIn direction="left" duration={0.8}>
            <div className="relative">
              <div className="relative h-[580px] rounded-2xl overflow-hidden bg-[#111]">
                <Image
                  src="/images/chris/chris-portrait.png"
                  alt="Cristian Fandos — Chris Fitness"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  quality={90}
                />
                {/* Solo gradiente suave en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>

              {/* Floating card */}
              <AnimateIn direction="right" delay={0.4} duration={0.7}>
                <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-[#00CFFF] text-[#0A0A0A] rounded-2xl px-6 py-5 max-w-[210px] shadow-2xl shadow-[#00CFFF]/20">
                  <p className="font-display text-5xl leading-none">90</p>
                  <p className="font-body text-xs font-bold mt-1 leading-tight">
                    DÍAS DE GARANTÍA
                    <br />O TE DEVUELVO EL DINERO
                  </p>
                </div>
              </AnimateIn>
            </div>
          </AnimateIn>

          {/* Text column */}
          <AnimateIn direction="right" duration={0.8} delay={0.1}>
            <p className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Quién es Chris Fitness
            </p>
            <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-none mb-8">
              SOY CRISTIAN
              <br />
              FANDOS.
            </h2>

            <p className="text-white/70 font-body leading-relaxed mb-5">
              Trabajo con hombres y mujeres que se esfuerzan a diario pero
              sienten que no avanzan. Personas que entrenan, que comen bien, pero
              no ven resultados.
            </p>
            <p className="text-white/70 font-body leading-relaxed mb-8">
              Mi misión es simple:{" "}
              <span className="text-white font-semibold">
                conseguir que vuelvas a sentirte orgulloso de ti mismo
              </span>{" "}
              y ayudarte a alcanzar los objetivos que llevas tiempo persiguiendo,
              con un método adaptado a tu vida real.
            </p>

            <Stagger className="space-y-3 mb-10" staggerDelay={0.08} baseDelay={0.2}>
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-3 font-body text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#00CFFF] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </div>
              ))}
            </Stagger>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00CFFF] text-[#0A0A0A] font-body font-bold text-sm px-7 py-4 rounded-full hover:bg-white transition-all duration-200 hover:scale-105"
            >
              Cuéntame tu objetivo
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
