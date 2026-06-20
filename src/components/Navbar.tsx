"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const WA_LINK = "https://wa.me/message/N67CCCESBR3SO1";

const navLinks: [string, string][] = [
  ["Método", "#metodo"],
  ["Cambios", "#cambios"],
  ["Testimonios", "#testimonios"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      } ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-chris-fitness.avif"
            alt="Chris Fitness"
            width={40}
            height={40}
            className="h-10 w-10 object-contain brightness-0 invert"
            priority
          />
          <span className="text-white font-display text-2xl tracking-widest hidden sm:block">
            CHRIS FITNESS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-white/70 hover:text-white text-sm tracking-wider uppercase font-body transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00CFFF] text-[#0A0A0A] font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors tracking-wide"
          >
            Habla con Chris
          </a>

          {/* Hamburger — solo móvil */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm tracking-wider uppercase font-body py-3 border-b border-white/5 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
