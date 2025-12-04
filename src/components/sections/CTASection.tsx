import { Button } from "@/components/ui/button";
import { Music, ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-12 md:p-16 text-center relative overflow-hidden">
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <div className="relative z-10">
              <div className="animate-fade-up inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent mb-10 shadow-glow animate-glow-pulse">
                <Music className="w-10 h-10 text-primary-foreground" />
              </div>

              <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Ready to Turn Your{" "}
                <span className="gradient-text">Story into Music?</span>
              </h2>

              <p className="animate-fade-up delay-200 text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
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

              <div className="animate-fade-up delay-400 mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>No upfront payment required</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span>Free consultation available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};