interface ProjectPageProps {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  year: string;
}

export function ProjectPage({ title, description, role, techStack, year }: ProjectPageProps) {
  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Featured Project · {year}
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-editorial-charcoal leading-tight">
          {title}
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <div className="flex-1 space-y-8">
        {/* Project image placeholder */}
        <div className="aspect-[4/3] bg-editorial-paper border border-editorial-charcoal/10 rounded-sm overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto border-2 border-editorial-charcoal/20 rounded-full" />
              <div className="text-xs text-editorial-charcoal/40 font-sans">
                Project Image
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
              Description
            </h3>
            <p className="font-sans text-sm md:text-base text-editorial-charcoal/80 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
                Role
              </h3>
              <p className="font-serif text-lg text-editorial-charcoal">
                {role}
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
                Tools & Techniques
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-sans text-editorial-charcoal/70 border border-editorial-charcoal/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
