export function AboutPage() {
  // Hackathon data with certificate links
  const hackathons = [
    { name: "EVOLVE - NIT Bhopal", certificateUrl: "/assets/image.png" },
    { name: "Odoo x Adani University Hackathon '26 organised by Adani University", certificateUrl: "/assets/image-1.png" },
    { name: "Reverse Coding X of Shaastra 2026 organised by Indian Institute of Technology (IIT), Madras", certificateUrl: "/assets/image-2.png" },
    { name: "National Road Safety Hackathon 2025 organised by Indian Institute of Technology (IIT), Madras", certificateUrl: "/assets/eab4b938-dbc7-411d-b656-c8069dd0edbc.pdf" },
    { name: "Market Making Challenge organized by Quant Insider and Fintech Club, IIT ISM Dhanbad", certificateUrl: "#" },
  ];

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
              A Btech 1st year student at Banasthali Vidyapeeth with specialization in Computer Science. Graduation year:-2029
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
              Philosophy
            </h3>
            <p className="font-sans text-sm md:text-base text-editorial-charcoal/80 leading-relaxed">
              I believe in making groundbreaking tech that solves problem on a large scale and for that I can co-ordinate with a team or be a one-woman team as long as the output is satisfactory
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
                  Btech 1st year student
                </div>
                <div className="text-sm text-editorial-charcoal/60 font-sans">
                  2025-2029
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-3">
                  Hackathons
                </div>
                <ul className="space-y-2">
                  {hackathons.map((hackathon, index) => (
                    <li key={index}>
                      <a
                        href={hackathon.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm md:text-base text-editorial-charcoal/80 underline decoration-editorial-charcoal/30 hover:decoration-editorial-charcoal transition-colors duration-200"
                      >
                        {hackathon.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
