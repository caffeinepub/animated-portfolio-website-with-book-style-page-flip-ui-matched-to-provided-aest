export function SkillsServicesPage() {
  const programmingLanguages = ['Java', 'Python', 'C', 'Dart', 'JavaScript'];

  const projects = [
    { name: 'Mini Amazon', tech: 'Java' },
    { name: 'Mini Tally', tech: 'Java' },
    { name: 'Mini Calculator', tech: 'C' },
    { name: 'Period Tracker', tech: 'Dart' },
  ];

  const extraSkills = ['Poet', 'Writer'];

  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Capabilities
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-editorial-charcoal">
          Skills
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <div className="flex-1 space-y-12">
        {/* Core Skills */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-6">
            Core Skills
          </h3>
          
          {/* Programming Languages */}
          <div className="mb-8">
            <div className="font-serif text-lg text-editorial-charcoal mb-3">
              Programming Languages
            </div>
            <ul className="space-y-2 list-disc list-inside">
              {programmingLanguages.map((language) => (
                <li key={language} className="text-sm text-editorial-charcoal/70 font-sans">
                  {language}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Built */}
          <div>
            <div className="font-serif text-lg text-editorial-charcoal mb-3">
              Projects Built
            </div>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name} className="text-sm text-editorial-charcoal/70 font-sans">
                  {project.name} - {project.tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Extra Skills */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-6">
            Extra Skills
          </h3>
          <ul className="space-y-2">
            {extraSkills.map((skill) => (
              <li key={skill} className="text-sm text-editorial-charcoal/70 font-sans">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
