import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Services from "@/components/sections/Services/Services";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Team from "@/components/sections/Team/Team";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
