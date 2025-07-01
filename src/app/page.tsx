'use client'
import Footer from "@/components/footer";
import Header  from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </section>
  );
}
