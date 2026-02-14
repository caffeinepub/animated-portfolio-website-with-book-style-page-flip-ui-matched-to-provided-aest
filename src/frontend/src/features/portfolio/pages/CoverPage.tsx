export function CoverPage() {
  return (
    <div className="h-full flex flex-col p-4 md:p-6 lg:p-8 relative overflow-hidden">
      {/* Top label row */}
      <div className="flex justify-between items-start mb-3 md:mb-4 flex-shrink-0">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
          SHIVANGI KUMAR'
        </div>
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
          2026 collection
        </div>
      </div>
      
      {/* Hero image - centered with constrained height */}
      <div className="flex-shrink flex items-center justify-center mb-3 md:mb-4 min-h-0 max-h-[40vh] md:max-h-[45vh]">
        <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-sm h-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="aspect-[3/4] max-h-full overflow-hidden rounded-sm shadow-editorial">
              <img
                src="/assets/generated/shivangi-portrait.dim_900x1200.jpg"
                alt="Shivangi Kumar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom title and highlights - fixed height section */}
      <div className="space-y-2 md:space-y-3 flex-shrink-0 mt-auto">
        <div className="w-12 h-px bg-editorial-charcoal/20" />
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-editorial-charcoal leading-none tracking-tight">
          SHIVANGI KUMAR
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-3 pt-1 md:pt-2">
          <div className="space-y-0.5">
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
          
          <div className="text-xs text-editorial-charcoal/50 font-sans hidden md:block">
            Click right to explore →
          </div>
        </div>
      </div>
    </div>
  );
}
