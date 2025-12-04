import { Award, Clock, Shield, Users, Headphones, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Professional Musicians",
    description: "Our team includes trained composers, vocalists, and audio engineers with years of experience.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Heart,
    title: "100% Personalized",
    description: "Every song is uniquely crafted from scratch based on your story and preferences.",
    gradient: "from-secondary to-coral",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your custom song within 3-5 days. Rush delivery available for urgent occasions.",
    gradient: "from-coral to-accent",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your personal stories and payment details are completely safe with us.",
    gradient: "from-accent to-neon-blue",
  },
  {
    icon: Headphones,
    title: "Studio Quality",
    description: "Professional mixing and mastering ensures your song sounds radio-ready.",
    gradient: "from-neon-blue to-primary",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Join hundreds of satisfied customers who've trusted us with their special moments.",
    gradient: "from-primary to-accent",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-28 relative" id="why-us">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="text-sm font-semibold">Why Us</span>
          </div>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="animate-fade-up delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to turning your emotions into unforgettable musical experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="animate-fade-up group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex w-18 h-18 rounded-2xl bg-gradient-to-br ${reason.gradient} items-center justify-center mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300 shadow-soft p-4`}>
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};