import { Button } from "@/components/ui/button";
import { Music, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-purple/20 to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-purple/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float delay-300" />

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan mb-8 shadow-glow-lg animate-glow-pulse">
            <Music className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Turn Your{" "}
            <span className="gradient-text">Story into Music?</span>
          </h2>

          <p className="animate-fade-up delay-200 text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start creating your personalized song today. Your emotions deserve to be heard.
          </p>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Create My Song Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Talk to Us on WhatsApp
            </Button>
          </div>

          <p className="animate-fade-up delay-400 mt-8 text-sm text-muted-foreground">
            ✨ No upfront payment required • Free consultation available
          </p>
        </div>
      </div>
    </section>
  );
};
