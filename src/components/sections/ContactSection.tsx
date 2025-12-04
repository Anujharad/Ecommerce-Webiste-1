import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Instagram, Youtube, Music } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="animate-fade-up delay-100 text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-fade-up delay-200">
              <div className="gradient-border">
                <div className="bg-card rounded-lg p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Song Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground">
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday Song</option>
                        <option value="anniversary">Anniversary Song</option>
                        <option value="wedding">Wedding Song</option>
                        <option value="proposal">Proposal Song</option>
                        <option value="friendship">Friendship Song</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                        placeholder="Tell us about your song idea..."
                      />
                    </div>
                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-300 space-y-6">
              {/* Quick contact cards */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@customsongs.com"
                    className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">hello@customsongs.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-4 p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-neon-cyan flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 99999 99999</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                    { icon: Music, label: "Spotify" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center hover:border-primary hover:shadow-glow-sm transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
