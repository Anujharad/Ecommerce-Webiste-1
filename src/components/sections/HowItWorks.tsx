import { MessageSquare, Music2, Headphones, Sparkles, Send, Smartphone } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Story",
    description: "Tell us about your message, emotions, and the occasion you're celebrating.",
  },
  {
    icon: Music2,
    title: "Choose Your Style",
    description: "Select music genre, voice type, tempo, and overall mood for your track.",
  },
  {
    icon: Sparkles,
    title: "We Create Magic",
    description: "Our team writes lyrics, composes music, and produces your song professionally.",
  },
  {
    icon: Headphones,
    title: "Preview & Revise",
    description: "Listen to your song preview and request any changes until it's perfect.",
  },
  {
    icon: Send,
    title: "Final Delivery",
    description: "Receive your finished song in high-quality formats ready to share.",
  },
  {
    icon: Smartphone,
    title: "Optional: Publish",
    description: "Get your song on Spotify, make it your ringtone, or both!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            From your story to a studio-quality song in just a few simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  {/* Number circle */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-glow">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gradient-to-b from-neon-cyan/50 to-neon-purple/50 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="glass-card rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
