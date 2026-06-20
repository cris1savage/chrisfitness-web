import AnimateIn from "@/components/ui/AnimateIn";
import { Stagger } from "@/components/ui/AnimateIn";

const testimonials = [
  {
    name: "Maikel Torres",
    text: "Cristian ha sido un antes y un después en mi vida. Su trabajo es impresionante, así como la atención y dedicación que pone a la hora de ayudarte. Pasé de pesar 125 kg a alcanzar un mínimo de 89 kg, un cambio enorme logrado en menos de un año.",
    highlight: "125 kg → 89 kg en menos de un año",
  },
  {
    name: "Jhonathan Paguay",
    text: "Asesorarme con Cristian ha sido una de las mejores decisiones que he tomado. Ya entrenaba, pero estaba estancado. En menos de 6 meses conseguimos una barbaridad de progreso. No se limita a marcar ejercicios: explica el 'porqué' de cada movimiento.",
    highlight: "Desbloqueó 6 meses de progreso estancado",
  },
  {
    name: "Melania Domínguez",
    text: "Si volviera a empezar de cero repetiría sin dudarlo. No es solo un entrenador, te enseña a tener un modo de vida sostenible para un día a día sin restricciones, con un acompañamiento de calidad. Revisiones semanales 100% productivas.",
    highlight: "Un modo de vida sostenible, sin restricciones",
  },
  {
    name: "Sergio Mohedas",
    text: "Más que un entrenador es un colega. Le preguntas cualquier cosa y te responde al momento. Se preocupa realmente por ti, la nutrición súper flexible, bien orientada a los objetivos. La app que utiliza es una pasada. Un servicio 10/10.",
    highlight: "Atención personalizada al detalle — 10/10",
  },
  {
    name: "Joel Forteza",
    text: "Llevamos 3 meses y medio y no puedo estar más contento con el trabajo, atención y dedicación de Chris. A pesar de llevar años entrenando sigo aprendiendo mucho. Los entrenamientos son otra cosa desde que empezamos.",
    highlight: "Aprendiendo incluso tras años entrenando",
  },
  {
    name: "Beatriz Moreno",
    text: "Llevo meses entrenando con Chris y también me lleva la alimentación. Siempre está pendiente de contestarte rápido. Aparte de lo mucho que he mejorado en fuerza y estado físico, también me siento con más energía. Súper trabajador y motivante.",
    highlight: "Más fuerza, mejor físico y más energía",
  },
];

function TestimonialCard({ name, text, highlight }: { name: string; text: string; highlight: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00CFFF">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="font-body text-xs font-bold text-[#00CFFF] tracking-wider uppercase mb-3">
        {highlight}
      </p>
      <p className="font-body text-[#444] text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-[#F0F0F0]">
        <div className="w-9 h-9 rounded-full bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
          <span className="font-display text-white text-sm">{name[0]}</span>
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-[#0A0A0A]">{name}</p>
          <p className="font-body text-xs text-[#999]">Cliente verificado</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-gray py-24" id="testimonios">
      <AnimateIn className="text-center mb-12 max-w-6xl mx-auto px-6">
        <p className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Lo que dicen mis clientes
        </p>
        <h2 className="font-display text-[#0A0A0A] text-5xl sm:text-6xl lg:text-7xl leading-none">
          RESULTADOS QUE HABLAN
        </h2>
      </AnimateIn>

      {/* Móvil: carousel horizontal */}
      <p className="md:hidden text-center font-body text-white/30 text-xs tracking-widest uppercase pb-4 px-6">
        ← Desliza para ver más →
      </p>
      <div
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map(({ name, text, highlight }) => (
          <div key={name} className="snap-start flex-shrink-0 w-[82vw] sm:w-[340px]">
            <TestimonialCard name={name} text={text} highlight={highlight} />
          </div>
        ))}
        <div className="flex-shrink-0 w-2" aria-hidden />
      </div>

      {/* Desktop: grid 3 columnas */}
      <Stagger
        className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6"
        staggerDelay={0.1}
        baseDelay={0.1}
      >
        {testimonials.map(({ name, text, highlight }) => (
          <TestimonialCard key={name} name={name} text={text} highlight={highlight} />
        ))}
      </Stagger>
    </section>
  );
}
