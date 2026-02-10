import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Get in Touch
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-editorial-charcoal">
          Contact
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <div className="flex-1 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
              Let's Collaborate
            </h3>
            <p className="font-sans text-sm md:text-base text-editorial-charcoal/80 leading-relaxed mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, feel free to reach out.
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-2">
                Email
              </div>
              <a
                href="mailto:shivangikumar2007@gmail.com"
                className="font-serif text-lg text-editorial-charcoal hover:text-editorial-charcoal/70 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                shivangikumar2007@gmail.com
              </a>
            </div>
            
            <div>
              <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-2">
                Location
              </div>
              <div className="font-serif text-lg text-editorial-charcoal">
                Banasthali Vidyapeeth, Rajasthan, India
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/shivangi-kumar-505225363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-editorial-charcoal/70 hover:text-editorial-charcoal transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/shivangikumar2007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-editorial-charcoal/70 hover:text-editorial-charcoal transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="font-sans text-sm">GitHub</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-editorial-charcoal/70 hover:text-editorial-charcoal transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-sans text-sm">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-editorial-charcoal/10">
            <p className="text-xs text-editorial-charcoal/60 font-sans leading-relaxed">
              © 2026. Built with love using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-editorial-charcoal transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
