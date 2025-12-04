import { cn } from "@/lib/utils";

interface SoundWaveProps {
  className?: string;
  barCount?: number;
  isPlaying?: boolean;
}

export const SoundWave = ({ className, barCount = 8, isPlaying = true }: SoundWaveProps) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-gradient-to-t from-neon-purple to-neon-cyan rounded-full",
            isPlaying ? "sound-wave-bar" : "h-2"
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isPlaying ? undefined : "8px",
          }}
        />
      ))}
    </div>
  );
};
