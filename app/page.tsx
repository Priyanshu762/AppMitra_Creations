import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://appmitra.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <About />
      <BlogSection />
      <Contact />
    </div>
  );
}
