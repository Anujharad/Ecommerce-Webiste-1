import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Instagram, Youtube, Music } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-28 relative" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <span className="text-sm font-semibold">Contact Us</span>
            </div>
            <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="animate-fade-up delay-200 text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-fade-up delay-200">
              <div className="card-elevated p-8">
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-0 outline-none transition-colors text-foreground"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-0 outline-none transition-colors text-foreground"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-0 outline-none transition-colors text-foreground"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Song Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-0 outline-none transition-colors text-foreground">
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
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-0 outline-none transition-colors text-foreground resize-none"
                      placeholder="Tell us about your song idea..."
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-300 space-y-6">
              {/* Quick contact cards */}
              <div className="card-elevated p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-5">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-soft">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@customsongs.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-soft">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">hello@customsongs.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-soft">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 99999 99999</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="card-elevated p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-5">
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
                      className="w-12 h-12 rounded-xl bg-background border-2 border-border flex items-center justify-center hover:border-primary/50 hover:shadow-soft transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
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