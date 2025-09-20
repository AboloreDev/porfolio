"use client";

import About from "@/components/code/About";
import Contact from "@/components/code/Contact";
import Container from "@/components/code/Container";
import Experience from "@/components/code/Experience";
import Footer from "@/components/code/Footer";
import Hero from "@/components/code/Hero";
import Navbar from "@/components/code/Navbar";
import Projects from "@/components/code/Projects";
import Stacks from "@/components/code/Stacks";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Container>
        <Hero />
        <About />
        <Stacks />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}
