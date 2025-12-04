import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AudioShowcase } from "@/components/sections/AudioShowcase";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AudioShowcase />
        <PricingSection />
        <HowItWorks />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
