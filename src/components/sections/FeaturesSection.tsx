import { Music, Radio, Smartphone, Sliders, Pen, Mic } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Custom Song Creation",
    description: "We turn your story, message, or emotion into a fully produced studio-quality track.",
  },
  {
    icon: Radio,
    title: "Spotify/JioSaavn Release",
    description: "Get your song published on top music platforms under your name.",
  },
  {
    icon: Smartphone,
    title: "Personalized Ringtones",
    description: "We convert your custom track into a high-quality caller tune or mobile ringtone.",
  },
  {
    icon: Sliders,
    title: "Professional Mixing",
    description: "Industry-level sound engineering for a polished, professional finish.",
  },
  {
    icon: Pen,
    title: "Lyrics Writing",
    description: "Custom-written lyrics that match your personality and story perfectly.",
  },
  {
    icon: Mic,
    title: "Voice Options",
    description: "Choose male, female, romantic, emotional, pop, rap, and more styles.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative" id="features">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we handle every aspect of your personalized music journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-up group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="gradient-border h-full">
                <div className="relative h-full p-6 bg-card rounded-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple/0 to-neon-cyan/0 group-hover:from-neon-purple/5 group-hover:to-neon-cyan/5 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
