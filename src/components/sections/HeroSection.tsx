import { Button } from "@/components/ui/button";
import { SoundWave } from "@/components/SoundWave";
import { Play, Music, Sparkles, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Decorative dots pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              {/* <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Premium Custom Music Creation</span>
              </div> */}
            </div>
            
            <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
              We Create{" "}
              <span className="gradient-text">Personalized Songs</span>{" "}
              That Tell Your Story
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
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
            <div className="animate-fade-up delay-400 mt-14 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { value: "500+", label: "Songs Created" },
                { value: "98%", label: "Happy Clients" },
                { value: "24hr", label: "Fast Delivery" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative animate-fade-up delay-500 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft glow effect */}
              <div className="absolute -inset-10 bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-2xl" />
              
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-foreground/5 rounded-[3rem] border border-border/50 p-2 shadow-elevated">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col shadow-inner">
                  {/* Notch */}
                  <div className="flex justify-center pt-3">
                    <div className="w-24 h-6 bg-foreground/10 rounded-full" />
                  </div>
                  
                  {/* Album art */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="relative w-48 h-48 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl animate-glow-pulse shadow-glow" />
                      <div className="absolute inset-1 bg-background rounded-xl flex items-center justify-center">
                        <Music className="w-20 h-20 text-primary" />
                      </div>
                      {/* Rotating ring */}
                      <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                    </div>
                    
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Your Custom Song</h3>
                    <p className="text-sm text-muted-foreground mb-6">Personalized for You</p>
                    
                    {/* Sound wave */}
                    <SoundWave className="mb-6" barCount={12} />
                    
                    {/* Progress bar */}
                    <div className="w-full mb-4">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
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
                      <button className="w-14 h-14 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-all hover:scale-105">
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

              {/* Floating elements */}
              <div className="absolute -top-4 -left-8 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center animate-float border border-primary/20">
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center animate-float delay-200 border border-secondary/20">
                <Music className="w-5 h-5 text-secondary" />
              </div>
              <div className="absolute top-1/2 -left-12 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center animate-float delay-400 border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};