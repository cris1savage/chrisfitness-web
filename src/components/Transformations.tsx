import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

const row1 = [4, 5, 6, 7, 8, 15, 16, 17, 18, 19, 20];
const row2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 4];

function MarqueeRow({
  images,
  direction,
}: {
  images: number[];
  direction: "left" | "right";
}) {
  const doubled = [...images, ...images];
  return (
    <div className="marquee-track overflow-hidden">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((n, i) => (
          <div
            key={`${n}-${i}`}
            className="relative w-48 h-64 sm:w-56 sm:h-72 flex-shrink-0 rounded-xl overflow-hidden group"
          >
            <Image
              src={`/images/cambios/${n}.png`}
              alt={`Transformación cliente ${n}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Transformations() {
  return (
    <section className="section-dark py-24 overflow-hidden" id="cambios">
      <AnimateIn className="text-center mb-14 px-6">
        <p className="text-[#00CFFF] font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Resultados reales
        </p>
        <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-none">
          CAMBIOS DE CLIENTES
        </h2>
        <p className="text-white/50 font-body mt-6 max-w-lg mx-auto text-sm leading-relaxed">
          Personas reales. Historias reales. Resultados reales.
        </p>
      </AnimateIn>

      <div className="flex flex-col gap-4">
        <MarqueeRow images={row1} direction="left" />
        <MarqueeRow images={row2} direction="right" />
      </div>

      <AnimateIn className="text-center mt-10 px-6" delay={0.2}>
        <p className="text-white/30 font-body text-xs tracking-wide">
          {row1.length}+ cambios documentados y contando
        </p>
      </AnimateIn>
    </section>
  );
}
