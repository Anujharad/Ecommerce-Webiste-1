import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Build",
    price: "4,999",
    description: "Basic Custom Song",
    features: [
      "Custom-written lyrics",
      "Studio-quality production",
      "Full song (1-3 minutes)",
      "Digital download (WAV + MP3)",
      "2 revision rounds",
    ],
    popular: false,
  },
  {
    name: "Build + Publish",
    price: "8,999",
    description: "Song + Spotify Release",
    features: [
      "Everything in Build",
      "Spotify & Apple Music release",
      "JioSaavn distribution",
      "Artist profile creation",
      "Custom album art design",
      "Lifetime streaming royalties",
    ],
    popular: true,
  },
  {
    name: "Complete",
    price: "12,999",
    description: "Song + Publish + Ringtone",
    features: [
      "Everything in Build + Publish",
      "Mobile ringtone version",
      "Caller tune (CRBT) setup",
      "High-quality trimmed edits",
      "Priority support",
      "Instrumental version",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 relative" id="pricing">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your personalized music journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "animate-fade-up relative",
                plan.popular && "md:-mt-4 md:mb-4"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-xs font-semibold text-primary-foreground">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={cn(
                "h-full rounded-2xl p-[1px]",
                plan.popular 
                  ? "bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan" 
                  : "bg-border"
              )}>
                <div className={cn(
                  "h-full rounded-2xl p-6 lg:p-8 bg-card",
                  plan.popular && "bg-card/95"
                )}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl text-muted-foreground">₹</span>
                      <span className="text-5xl font-display font-bold gradient-text">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant={plan.popular ? "hero" : "glow"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom package note */}
        <div className="mt-12 text-center animate-fade-up delay-500">
          <p className="text-muted-foreground mb-4">
            Need something special? We offer custom packages for weddings, proposals, and corporate events.
          </p>
          <Button variant="outline" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
