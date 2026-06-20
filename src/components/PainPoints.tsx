import AnimateIn from "@/components/ui/AnimateIn";
import { Stagger } from "@/components/ui/AnimateIn";

const points = [
  {
    icon: "⏱",
    title: "Llevas tiempo entrenando sin avanzar",
    desc: "Vas al gimnasio, pones el esfuerzo, pero la báscula no se mueve y el espejo tampoco.",
  },
  {
    icon: "📋",
    title: "Entrenas sin una planificación real",
    desc: "Haces lo que puedes o lo que ves en redes, pero sin una estructura que tenga sentido para ti.",
  },
  {
    icon: "💪",
    title: "No ves resultados proporcionales al esfuerzo",
    desc: "Comes bien, no te saltas los entrenos. Y aun así sientes que algo no cuadra.",
  },
  {
    icon: "🎯",
    title: "Te falta una guía adaptada a tus objetivos",
    desc: "Cada persona es diferente. Un plan genérico nunca va a darte los resultados de uno personalizado.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <p className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            ¿Te suena esto?
          </p>
          <h2 className="font-display text-[#0A0A0A] text-5xl sm:text-6xl lg:text-7xl leading-none">
            TE SIENTES IDENTIFICADO
          </h2>
        </AnimateIn>

        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
          baseDelay={0.1}
        >
          {points.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#F5F5F5] rounded-2xl p-7 hover:bg-[#0A0A0A] hover:text-white group transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-display text-xl leading-tight mb-3 text-[#0A0A0A] group-hover:text-[#00CFFF]">
                {title}
              </h3>
              <p className="font-body text-sm text-[#555] group-hover:text-white/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </Stagger>

        <AnimateIn className="text-center mt-12" delay={0.4}>
          <p className="font-body text-[#555] text-base">
            Si te has sentido así en algún momento,{" "}
            <span className="font-semibold text-[#0A0A0A]">
              el problema no eres tú. Es el método.
            </span>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
