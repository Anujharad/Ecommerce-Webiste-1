import { useState } from "react";
import { Play, Pause, Heart } from "lucide-react";
import { SoundWave } from "@/components/SoundWave";
import { cn } from "@/lib/utils";

const samples = [
  { id: 1, title: "Eternal Love Song", genre: "Romantic", duration: "3:24", gradient: "from-primary to-secondary" },
  { id: 2, title: "Birthday Celebration", genre: "Pop", duration: "2:58", gradient: "from-secondary to-coral" },
  { id: 3, title: "Anniversary Memories", genre: "Acoustic", duration: "4:12", gradient: "from-accent to-neon-blue" },
  { id: 4, title: "Wedding Entry Track", genre: "Cinematic", duration: "3:45", gradient: "from-neon-blue to-primary" },
  { id: 5, title: "Friendship Forever", genre: "Indie", duration: "3:18", gradient: "from-accent to-secondary" },
  { id: 6, title: "Motivational Anthem", genre: "EDM", duration: "3:56", gradient: "from-primary to-accent" },
];

export const AudioShowcase = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden" id="examples">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="text-sm font-semibold">Our Work</span>
          </div>
          <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hear the <span className="gradient-text">Magic</span>
          </h2>
          <p className="animate-fade-up delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen to some of the beautiful custom songs we've created for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((sample, index) => (
            <div
              key={sample.id}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-elevated p-5">
                <div className="flex gap-4">
                  {/* Album art */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className={cn(
                      "absolute inset-0 rounded-xl bg-gradient-to-br shadow-soft",
                      sample.gradient
                    )} />
                    <button
                      onClick={() => setPlayingId(playingId === sample.id ? null : sample.id)}
                      className="absolute inset-0 flex items-center justify-center bg-foreground/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                    >
                      {playingId === sample.id ? (
                        <Pause className="w-8 h-8 text-primary-foreground" fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      )}
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground truncate mb-1">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{sample.genre}</p>
                    
                    {/* Waveform / Progress */}
                    <div className="flex items-center gap-3">
                      {playingId === sample.id ? (
                        <SoundWave barCount={6} className="flex-1" />
                      ) : (
                        <div className="flex-1 h-6 flex items-center">
                          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-0 bg-gradient-to-r from-primary to-secondary" />
                          </div>
                        </div>
                      )}
                      <span className="text-xs text-muted-foreground font-medium">{sample.duration}</span>
                    </div>
                  </div>

                  {/* Like button */}
                  <button className="self-start text-muted-foreground hover:text-secondary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};