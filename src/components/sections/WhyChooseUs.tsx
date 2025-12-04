import { Award, Clock, Shield, Users, Headphones, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Professional Musicians",
    description: "Our team includes trained composers, vocalists, and audio engineers with years of experience.",
  },
  {
    icon: Heart,
    title: "100% Personalized",
    description: "Every song is uniquely crafted from scratch based on your story and preferences.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your custom song within 3-5 days. Rush delivery available for urgent occasions.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your personal stories and payment details are completely safe with us.",
  },
  {
    icon: Headphones,
    title: "Studio Quality",
    description: "Professional mixing and mastering ensures your song sounds radio-ready.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Join hundreds of satisfied customers who've trusted us with their special moments.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative" id="why-us">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to turning your emotions into unforgettable musical experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="animate-fade-up group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
