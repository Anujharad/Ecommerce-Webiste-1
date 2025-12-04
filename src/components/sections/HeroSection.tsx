import { Button } from "@/components/ui/button";
import { SoundWave } from "@/components/SoundWave";
import { Play, Music, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float delay-500" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Custom Music Creation</span>
              </div>
            </div>
            
            <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              We Create{" "}
              <span className="gradient-text">Personalized Songs</span>{" "}
              That Tell Your Story
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From heartfelt messages to full studio-level tracks — built uniquely for you. 
              Get your song on Spotify, Apple Music & more.
            </p>
            
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                <Music className="w-5 h-5" />
                Create Your Song
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="w-5 h-5" />
                Listen to Examples
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-400 mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { value: "500+", label: "Songs Created" },
                { value: "98%", label: "Happy Clients" },
                { value: "24hr", label: "Delivery" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative animate-fade-up delay-500 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-glow-gradient scale-150" />
              
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-card rounded-[3rem] border-4 border-muted p-2 shadow-glow-lg">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Notch */}
                  <div className="flex justify-center pt-3">
                    <div className="w-24 h-6 bg-muted rounded-full" />
                  </div>
                  
                  {/* Album art */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="relative w-48 h-48 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan rounded-2xl animate-glow-pulse" />
                      <div className="absolute inset-1 bg-card rounded-xl flex items-center justify-center">
                        <Music className="w-20 h-20 text-primary" />
                      </div>
                      {/* Rotating ring */}
                      <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                    </div>
                    
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Your Custom Song</h3>
                    <p className="text-sm text-muted-foreground mb-6">Personalized for You</p>
                    
                    {/* Sound wave */}
                    <SoundWave className="mb-6" barCount={12} />
                    
                    {/* Progress bar */}
                    <div className="w-full mb-4">
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1:24</span>
                        <span>3:45</span>
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center gap-6">
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                      </button>
                      <button className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-shadow">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </button>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating music notes */}
              <div className="absolute -top-4 -left-8 text-4xl animate-float">🎵</div>
              <div className="absolute -bottom-4 -right-8 text-3xl animate-float delay-200">🎶</div>
              <div className="absolute top-1/2 -left-12 text-2xl animate-float delay-400">♪</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
