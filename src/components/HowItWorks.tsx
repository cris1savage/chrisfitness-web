import AnimateIn from "@/components/ui/AnimateIn";
import { Stagger } from "@/components/ui/AnimateIn";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const method = [
  "Planes 100% personalizados según tu nivel y objetivos",
  "Seguimiento semanal con revisiones y ajustes continuos",
  "Flexible y adaptado a tu horario y estilo de vida",
  "Apoyo integral en entrenamiento, nutrición y hábitos",
  "Motivación constante — siempre tienes a alguien contigo",
  "Método basado en ciencia y experiencia real, sin lesiones",
];

export default function HowItWorks() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn direction="up" delay={0.1}>
          <div className="bg-[#F5F5F5] rounded-3xl p-10 lg:p-14">
            <h3 className="font-display text-[#0A0A0A] text-4xl sm:text-5xl mb-10 text-center leading-none">
              POR QUÉ MI MÉTODO FUNCIONA
            </h3>
            <Stagger
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5"
              staggerDelay={0.07}
              baseDelay={0.1}
            >
              {method.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00CFFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="font-body text-[#0A0A0A] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </Stagger>

            <div className="text-center mt-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-body font-bold text-sm px-8 py-4 rounded-full hover:bg-[#00CFFF] hover:text-[#0A0A0A] transition-all duration-200 hover:scale-105"
              >
                Quiero empezar — WhatsApp
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
