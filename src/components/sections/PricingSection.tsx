import { Check, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Jingle",
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
    name: "Brand Jingle",
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
    name: "Brand Short Song",
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
    <section className="py-28 relative" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="text-sm font-semibold">Pricing Plans</span>
          </div>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="animate-fade-up delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your personalized music journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "animate-fade-up relative",
                plan.popular && "md:-mt-6 md:mb-6"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-sm font-bold text-primary-foreground shadow-glow">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={cn(
                "h-full rounded-3xl p-[2px]",
                plan.popular 
                  ? "bg-gradient-to-br from-primary via-secondary to-accent shadow-glow" 
                  : "bg-border"
              )}>
                <div className="h-full rounded-[calc(1.5rem-2px)] p-8 bg-background">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xl text-muted-foreground">₹</span>
                      <span className="text-5xl font-display font-bold gradient-text">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
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
        <div className="mt-16 text-center animate-fade-up delay-500">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
            <Sparkles className="w-8 h-8 text-primary" />
            <div className="text-center sm:text-left">
              <p className="text-foreground font-medium mb-1">
                Need something special?
              </p>
              <p className="text-sm text-muted-foreground">
                We offer custom packages for weddings, proposals, and corporate events.
              </p>
            </div>
            <Button variant="outline" size="lg" className="whitespace-nowrap">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};