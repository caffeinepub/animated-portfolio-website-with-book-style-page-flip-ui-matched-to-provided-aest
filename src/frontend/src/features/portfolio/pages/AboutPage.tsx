export function AboutPage() {
  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Introduction
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-editorial-charcoal">
          About Me
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
              Background
            </h3>
            <p className="font-sans text-sm md:text-base text-editorial-charcoal/80 leading-relaxed">
              A multidisciplinary designer with over 8 years of experience crafting 
              compelling visual narratives. Specializing in brand identity, editorial 
              design, and packaging, I bring a meticulous attention to detail and a 
              passion for timeless aesthetics.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
              Philosophy
            </h3>
            <p className="font-sans text-sm md:text-base text-editorial-charcoal/80 leading-relaxed">
              I believe great design is invisible—it communicates effortlessly while 
              elevating the content it serves. My approach combines strategic thinking 
              with refined execution, always in service of the story being told.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
              Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-serif text-lg text-editorial-charcoal mb-1">
                  Senior Designer
                </div>
                <div className="text-sm text-editorial-charcoal/60 font-sans">
                  Design Studio · 2020–Present
                </div>
              </div>
              <div>
                <div className="font-serif text-lg text-editorial-charcoal mb-1">
                  Art Director
                </div>
                <div className="text-sm text-editorial-charcoal/60 font-sans">
                  Creative Agency · 2018–2020
                </div>
              </div>
              <div>
                <div className="font-serif text-lg text-editorial-charcoal mb-1">
                  Junior Designer
                </div>
                <div className="text-sm text-editorial-charcoal/60 font-sans">
                  Branding Firm · 2016–2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
