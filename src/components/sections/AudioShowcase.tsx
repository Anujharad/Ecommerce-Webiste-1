import { useState } from "react";
import { Play, Pause, Heart } from "lucide-react";
import { SoundWave } from "@/components/SoundWave";
import { cn } from "@/lib/utils";

const samples = [
  { id: 1, title: "Eternal Love Song", genre: "Romantic", duration: "3:24", color: "from-pink-500 to-rose-600" },
  { id: 2, title: "Birthday Celebration", genre: "Pop", duration: "2:58", color: "from-neon-purple to-neon-blue" },
  { id: 3, title: "Anniversary Memories", genre: "Acoustic", duration: "4:12", color: "from-amber-500 to-orange-600" },
  { id: 4, title: "Wedding Entry Track", genre: "Cinematic", duration: "3:45", color: "from-neon-blue to-neon-cyan" },
  { id: 5, title: "Friendship Forever", genre: "Indie", duration: "3:18", color: "from-emerald-500 to-teal-600" },
  { id: 6, title: "Motivational Anthem", genre: "EDM", duration: "3:56", color: "from-violet-500 to-purple-600" },
];

export const AudioShowcase = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="examples">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="animate-fade-up font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hear the <span className="gradient-text">Magic</span>
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <div className="glass-card rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm">
                <div className="flex gap-4">
                  {/* Album art */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className={cn(
                      "absolute inset-0 rounded-lg bg-gradient-to-br",
                      sample.color
                    )} />
                    <button
                      onClick={() => setPlayingId(playingId === sample.id ? null : sample.id)}
                      className="absolute inset-0 flex items-center justify-center bg-background/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {playingId === sample.id ? (
                        <Pause className="w-8 h-8 text-foreground" fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                      )}
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground truncate mb-1">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{sample.genre}</p>
                    
                    {/* Waveform / Progress */}
                    <div className="flex items-center gap-3">
                      {playingId === sample.id ? (
                        <SoundWave barCount={6} className="flex-1" />
                      ) : (
                        <div className="flex-1 h-6 flex items-center">
                          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-0 bg-gradient-to-r from-neon-purple to-neon-cyan" />
                          </div>
                        </div>
                      )}
                      <span className="text-xs text-muted-foreground">{sample.duration}</span>
                    </div>
                  </div>

                  {/* Like button */}
                  <button className="self-start text-muted-foreground hover:text-primary transition-colors">
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
