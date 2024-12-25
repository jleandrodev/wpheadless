import AboutSection from "@/components/layout/home/AboutSection";
import Hero from "@/components/layout/home/Hero";
import OurBlogSection from "@/components/layout/home/OurBlogSection";
import Services from "@/components/layout/home/Services";
import Pricing from "@/components/layout/home/Pricing";
import Header from "@/components/layout/site/Header";
import Footer from "@/components/layout/site/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <AboutSection />
      <OurBlogSection />
      <Pricing />
      <Footer />
    </main>
  );
}
