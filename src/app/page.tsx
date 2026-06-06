import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Process } from "@/components/sections/Process";
import { CodeShowcase } from "@/components/sections/CodeShowcase";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 bg-matte text-foreground selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Trust />
      <Stats />
      <Services />
      <Showcase />
      <Process />
      <CodeShowcase />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
