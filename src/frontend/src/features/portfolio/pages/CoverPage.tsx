export function CoverPage() {
  return (
    <div className="h-full flex flex-col md:flex-row gap-8 p-8 md:p-12 lg:p-16">
      {/* Left side - Portrait */}
      <div className="flex-shrink-0 w-full md:w-2/5 flex items-center justify-center">
        <div className="portrait-frame relative w-full max-w-sm">
          <img
            src="/assets/generated/shivangi-portrait.dim_900x1200.jpg"
            alt="Shivangi Kumar"
            className="w-full h-auto object-cover rounded-sm shadow-editorial"
          />
        </div>
      </div>

      {/* Right side - Cover content */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
            SHIVANGI KUMAR'
          </div>
          <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans">
            2026 collection
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center space-y-8 mt-8 md:mt-0">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-editorial-charcoal leading-none mb-4">
              Creative
              <br />
              Portfolio
            </h1>
            <div className="w-24 h-px bg-editorial-charcoal/20 mt-6" />
          </div>
          
          <div className="max-w-md space-y-3">
            <p className="font-sans text-sm uppercase tracking-wider text-editorial-charcoal/70">
              BTech Computer Science
            </p>
            <p className="font-sans text-sm uppercase tracking-wider text-editorial-charcoal/70">
              1st year
            </p>
            <p className="font-sans text-sm uppercase tracking-wider text-editorial-charcoal/70">
              Banasthali Vidyapeeth
            </p>
          </div>
        </div>
        
        <div className="flex justify-end items-end mt-8 md:mt-0">
          <div className="text-xs text-editorial-charcoal/60 font-sans">
            Click right to explore →
          </div>
        </div>
      </div>
    </div>
  );
}
