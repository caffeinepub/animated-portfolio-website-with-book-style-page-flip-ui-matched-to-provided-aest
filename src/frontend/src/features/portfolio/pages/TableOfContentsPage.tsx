import { portfolioPages } from '../portfolioPages';
import { useBookNavigation } from '../../../components/book/BookNavigationContext';

export function TableOfContentsPage() {
  const { navigateToPortfolioPage } = useBookNavigation();

  return (
    <div className="h-full flex flex-col p-8 md:p-12 lg:p-16">
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest text-editorial-charcoal/60 font-sans mb-4">
          Table of
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-editorial-charcoal">
          Contents
        </h2>
        <div className="w-16 h-px bg-editorial-charcoal/20 mt-4" />
      </div>
      
      <nav className="flex-1 space-y-6">
        {portfolioPages.slice(2).map((page, index) => {
          const portfolioPageIndex = index + 2; // Offset by 2 to account for cover and TOC
          
          return (
            <button
              key={page.id}
              type="button"
              onClick={() => navigateToPortfolioPage(portfolioPageIndex)}
              className="w-full group border-b border-editorial-charcoal/10 pb-4 hover:border-editorial-charcoal/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-editorial-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-editorial-cream text-left"
            >
              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-sans text-editorial-charcoal/40 w-8 group-hover:text-editorial-charcoal/60 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-editorial-charcoal group-hover:text-editorial-charcoal/70 transition-colors">
                    {page.title}
                  </h3>
                </div>
                <span className="text-xs font-sans text-editorial-charcoal/40 group-hover:text-editorial-charcoal/60 transition-colors">
                  {index + 3}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
      
      <div className="mt-8 text-xs text-editorial-charcoal/60 font-sans">
        Use arrow keys or click to navigate
      </div>
    </div>
  );
}
