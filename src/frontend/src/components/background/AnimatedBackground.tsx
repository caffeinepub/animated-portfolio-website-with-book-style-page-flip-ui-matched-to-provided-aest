import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function AnimatedBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 z-0">
      {/* Base warm gradient plate */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/bg-plate.dim_1920x1080.png)',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className={`absolute inset-0 opacity-30 ${prefersReducedMotion ? '' : 'animate-gradient'}`}
        style={{
          background: 'radial-gradient(circle at 30% 50%, oklch(0.85 0.02 60) 0%, transparent 50%), radial-gradient(circle at 70% 50%, oklch(0.82 0.03 45) 0%, transparent 50%)',
        }}
      />
      
      {/* Film grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none grain-texture"
        style={{
          backgroundImage: 'url(/assets/generated/bg-grain.dim_1024x1024.png)',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
