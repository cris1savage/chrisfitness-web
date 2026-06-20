import Link from "next/link";
import Image from "next/image";

export default function PolicyLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="bg-[#0A0A0A] py-5 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-chris-fitness.avif"
              alt="Chris Fitness"
              width={32}
              height={32}
              className="h-8 w-8 object-contain brightness-0 invert"
            />
            <span className="font-display text-white text-xl tracking-widest hidden sm:block">
              CHRIS FITNESS
            </span>
          </Link>
          <Link
            href="/"
            className="font-body text-white/50 hover:text-white text-xs tracking-wide transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[#00CFFF] font-body text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Información legal
        </p>
        <h1 className="font-display text-[#0A0A0A] text-5xl sm:text-6xl leading-none mb-4">
          {title.toUpperCase()}
        </h1>
        <p className="font-body text-[#999] text-sm mb-12 pb-8 border-b border-[#E8E8E8]">
          Última actualización: {lastUpdated}
        </p>

        <div className="prose-policy">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-body text-white/25 text-xs">
            © {new Date().getFullYear()} Chris Fitness. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidad" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
