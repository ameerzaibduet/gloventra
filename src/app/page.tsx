import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      
      <HeroSection />
      <AboutSection />
      <main className="container mx-auto px-6 mt-20">
        {/* You can add Services, Destinations, Testimonials sections here */}
      </main>
    </>
  );
}
