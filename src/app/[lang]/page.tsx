import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 bg-matte text-foreground selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}
