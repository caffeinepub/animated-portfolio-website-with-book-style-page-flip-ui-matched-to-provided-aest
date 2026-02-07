export function SkillsServicesPage() {
  const skills = [
    { category: 'Design', items: ['Brand Identity', 'Editorial Design', 'Packaging', 'Typography'] },
    { category: 'Tools', items: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InDesign'] },
    { category: 'Expertise', items: ['Art Direction', 'Visual Systems', 'Print Production', 'Digital Design'] },
  ];

  const services = [
    {
      title: 'Brand Identity',
      description: 'Comprehensive brand systems including logos, color palettes, typography, and guidelines.',
    },
    {
      title: 'Editorial Design',
      description: 'Magazine layouts, book design, and publication systems with strong typographic foundations.',
    },
    {
      title: 'Packaging Design',
      description: 'Product packaging that balances aesthetics with functionality and shelf presence.',
    },
    {
      title: 'Art Direction',
      description: 'Creative direction for photoshoots, campaigns, and multi-channel brand experiences.',
    },
  ];

  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Capabilities
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-editorial-charcoal">
          Skills & Services
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <div className="flex-1 space-y-12">
        {/* Skills */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-6">
            Core Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <div className="font-serif text-lg text-editorial-charcoal mb-3">
                  {skill.category}
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-editorial-charcoal/70 font-sans">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-6">
            Services Offered
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="border-l-2 border-editorial-charcoal/20 pl-4">
                <div className="font-serif text-lg text-editorial-charcoal mb-2">
                  {service.title}
                </div>
                <p className="text-sm text-editorial-charcoal/70 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
