import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya Sharma",
    occasion: "Anniversary Gift",
    rating: 5,
    text: "I surprised my husband with a song about our journey together. He cried happy tears! The lyrics captured our story perfectly.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    occasion: "Birthday Surprise",
    rating: 5,
    text: "Got a custom birthday song for my mom's 60th. The whole family was moved. Best gift I've ever given!",
    avatar: "RV",
  },
  {
    name: "Ananya Patel",
    occasion: "Wedding Proposal",
    rating: 5,
    text: "Used the song during my proposal. She said yes before the song even finished! Absolute magic.",
    avatar: "AP",
  },
  {
    name: "Karthik Menon",
    occasion: "Friendship Song",
    rating: 5,
    text: "Created a song for my best friend's farewell. Professional quality, emotional lyrics. They nailed the vibe!",
    avatar: "KM",
  },
  {
    name: "Sneha Iyer",
    occasion: "Wedding Entry",
    rating: 5,
    text: "Our wedding entry song was THE highlight of our reception. Guests still talk about it! Worth every rupee.",
    avatar: "SI",
  },
  {
    name: "Arjun Reddy",
    occasion: "Motivational Track",
    rating: 5,
    text: "Needed a pump-up song for my startup team. They delivered an anthem that gives us chills every time!",
    avatar: "AR",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stories from <span className="gradient-text">Happy Hearts</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who turned their emotions into music
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.occasion}</div>
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
