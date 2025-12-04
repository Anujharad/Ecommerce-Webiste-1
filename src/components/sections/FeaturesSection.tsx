import { Music, Radio, Smartphone, Sliders, Pen, Mic } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Custom Song Creation",
    description: "We turn your story, message, or emotion into a fully produced studio-quality track.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Radio,
    title: "Spotify/JioSaavn Release",
    description: "Get your song published on top music platforms under your name.",
    gradient: "from-secondary to-coral",
  },
  {
    icon: Smartphone,
    title: "Personalized Ringtones",
    description: "We convert your custom track into a high-quality caller tune or mobile ringtone.",
    gradient: "from-accent to-neon-blue",
  },
  {
    icon: Sliders,
    title: "Professional Mixing",
    description: "Industry-level sound engineering for a polished, professional finish.",
    gradient: "from-neon-blue to-primary",
  },
  {
    icon: Pen,
    title: "Lyrics Writing",
    description: "Custom-written lyrics that match your personality and story perfectly.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Mic,
    title: "Voice Options",
    description: "Choose male, female, romantic, emotional, pop, rap, and more styles.",
    gradient: "from-secondary to-accent",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-28 relative" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="animate-fade-up delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we handle every aspect of your personalized music journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-elevated h-full p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};