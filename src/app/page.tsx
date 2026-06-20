import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Process from "@/components/Process";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Process />
      <About />
      <HowItWorks />
      <Transformations />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
