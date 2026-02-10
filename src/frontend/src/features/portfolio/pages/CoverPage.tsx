export function CoverPage() {
  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16 relative">
      {/* Top label row */}
      <div className="flex justify-between items-start mb-8 md:mb-12">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
          SHIVANGI KUMAR'
        </div>
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
          2026 collection
        </div>
      </div>
      
      {/* Hero image - centered */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-12">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-editorial">
            <img
              src="/assets/generated/shivangi-portrait.dim_900x1200.jpg"
              alt="Shivangi Kumar"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom title and highlights */}
      <div className="space-y-6">
        <div className="w-16 h-px bg-editorial-charcoal/20" />
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-editorial-charcoal leading-none tracking-tight">
          SHIVANGI KUMAR
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 pt-4">
          <div className="space-y-2">
            <p className="font-sans text-xs uppercase tracking-wider text-editorial-charcoal/70">
              BTech Computer Science
            </p>
            <p className="font-sans text-xs uppercase tracking-wider text-editorial-charcoal/70">
              1st year
            </p>
            <p className="font-sans text-xs uppercase tracking-wider text-editorial-charcoal/70">
              Banasthali Vidyapeeth
            </p>
          </div>
          
          <div className="text-xs text-editorial-charcoal/50 font-sans">
            Click right to explore →
          </div>
        </div>
      </div>
    </div>
  );
}
