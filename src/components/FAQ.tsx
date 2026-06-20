"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito tener experiencia previa?",
    a: "No. Los entrenamientos se adaptan a tu nivel, tanto si estás empezando como si ya tienes experiencia. Comenzamos siempre con una valoración inicial para conocer tu estado físico y objetivos.",
  },
  {
    q: "¿Cuáles son los precios de los entrenamientos?",
    a: "Los precios varían en función de tus objetivos, la frecuencia de entrenamiento y el nivel de personalización que necesites. Lo mejor es que contactes conmigo directamente para ofrecerte una propuesta adaptada a ti, sin compromiso.",
  },
  {
    q: "¿Por qué debo elegir el entrenamiento online?",
    a: "El entrenamiento online te permite entrenar desde cualquier lugar y adaptar el horario a tu día a día, sin perder calidad ni seguimiento. Tendrás un plan totalmente personalizado, revisiones periódicas y contacto continuo para resolver dudas y ajustar el entrenamiento según tu progreso.",
  },
  {
    q: "¿Puedo entrenar en casa o en el gimnasio?",
    a: "Sí. Los planes de entrenamiento son 100% adaptados a tus necesidades, objetivos y al material del que dispongas. Tanto si entrenas en casa como en el gimnasio, el programa se ajustará para que puedas progresar de forma efectiva y segura.",
  },
  {
    q: "¿Cómo es el contacto contigo?",
    a: "El contacto es vía WhatsApp, lo que permite una comunicación rápida y directa. Estaré disponible para resolver cualquier duda, ya sea sobre la alimentación o durante un entrenamiento, y acompañarte en todo el proceso.",
  },
  {
    q: "¿Recibo seguimiento y revisiones del plan?",
    a: "Sí. El plan incluye seguimiento continuo, con revisiones semanales y ajustes del entrenamiento para asegurarnos de que sigues progresando y mantienes la motivación.",
  },
  {
    q: "¿Y si no tengo mucho tiempo para entrenar?",
    a: "No hay problema. El plan de entrenamiento se adapta a tu disponibilidad, con sesiones eficientes y realistas para que puedas entrenar incluso con poco tiempo, sin dejar de avanzar hacia tus objetivos.",
  },
  {
    q: "¿Cuándo empezaré a ver resultados?",
    a: "Los resultados dependen de tu constancia, objetivos y esfuerzo, pero normalmente los primeros cambios se notan en 4 a 6 semanas. Con seguimiento semanal y ajustes personalizados, tu progreso será real, medible y sostenible.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E8E8E8] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="font-body font-semibold text-[#0A0A0A] text-base group-hover:text-[#00CFFF] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center transition-all duration-200 group-hover:border-[#00CFFF] group-hover:bg-[#00CFFF] ${
            open ? "bg-[#0A0A0A] rotate-45" : ""
          }`}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className={open ? "stroke-white" : "stroke-[#0A0A0A] group-hover:stroke-white"}
          >
            <path
              d="M5.5 1v9M1 5.5h9"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="font-body text-[#555] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-light py-24 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-[#0A0A0A] text-5xl sm:text-6xl leading-none">
            ¿TIENES DUDAS?
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E8E8] px-8 py-2 shadow-sm">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
