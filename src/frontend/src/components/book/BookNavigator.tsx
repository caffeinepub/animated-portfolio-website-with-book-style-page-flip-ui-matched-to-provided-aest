import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioPages } from '../../features/portfolio/portfolioPages';
import { PageFlipLayer } from './PageFlipLayer';
import { PaginationIndicator } from './PaginationIndicator';
import { useBookLayout } from './useBookLayout';
import { BookNavigationProvider } from './BookNavigationContext';

export function BookNavigator() {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const { isSinglePage } = useBookLayout();

  const totalPages = portfolioPages.length;
  const totalSpreads = isSinglePage ? totalPages : Math.ceil(totalPages / 2);

  const goToPage = useCallback((index: number) => {
    if (index < 0 || index >= totalSpreads || isFlipping) return;
    
    const direction = index > currentSpreadIndex ? 'forward' : 'backward';
    setFlipDirection(direction);
    setIsFlipping(true);
    
    setTimeout(() => {
      setCurrentSpreadIndex(index);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  }, [currentSpreadIndex, totalSpreads, isFlipping]);

  const navigateToPortfolioPage = useCallback((pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= totalPages) return;
    
    // Convert portfolio page index to spread index based on layout
    const spreadIndex = isSinglePage ? pageIndex : Math.floor(pageIndex / 2);
    goToPage(spreadIndex);
  }, [isSinglePage, totalPages, goToPage]);

  const nextPage = useCallback(() => {
    if (currentSpreadIndex < totalSpreads - 1) {
      goToPage(currentSpreadIndex + 1);
    }
  }, [currentSpreadIndex, totalSpreads, goToPage]);

  const prevPage = useCallback(() => {
    if (currentSpreadIndex > 0) {
      goToPage(currentSpreadIndex - 1);
    }
  }, [currentSpreadIndex, goToPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  const getCurrentPages = () => {
    if (isSinglePage) {
      return [portfolioPages[currentSpreadIndex]];
    }
    
    const leftIndex = currentSpreadIndex * 2;
    const rightIndex = leftIndex + 1;
    
    return [
      leftIndex < totalPages ? portfolioPages[leftIndex] : null,
      rightIndex < totalPages ? portfolioPages[rightIndex] : null,
    ].filter(Boolean);
  };

  const currentPages = getCurrentPages();

  return (
    <div className="relative w-full max-w-7xl mx-auto" tabIndex={0}>
      <PaginationIndicator current={currentSpreadIndex + 1} total={totalSpreads} />
      
      <div className="relative book-container">
        {/* Book shadow and base */}
        <div className="book-shadow" />
        
        {/* Main book spread */}
        <div className={`book-spread ${isSinglePage ? 'single-page' : 'double-page'}`}>
          {/* Left page click area */}
          {currentSpreadIndex > 0 && (
            <button
              onClick={prevPage}
              disabled={isFlipping}
              className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer group"
              aria-label="Previous page"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity">
                <ChevronLeft className="w-8 h-8 text-editorial-charcoal/60" />
              </div>
            </button>
          )}
          
          {/* Right page click area */}
          {currentSpreadIndex < totalSpreads - 1 && (
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer group"
              aria-label="Next page"
            >
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-8 h-8 text-editorial-charcoal/60" />
              </div>
            </button>
          )}
          
          {/* Always-visible next button for cover page */}
          {currentSpreadIndex === 0 && totalSpreads > 1 && (
            <button
              onClick={nextPage}
              disabled={isFlipping}
              className="absolute bottom-6 right-6 z-30 bg-editorial-charcoal/10 hover:bg-editorial-charcoal/20 backdrop-blur-sm rounded-full p-3 transition-all shadow-sm"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5 text-editorial-charcoal" />
            </button>
          )}
          
          {/* Page flip animation layer */}
          {isFlipping && flipDirection && (
            <PageFlipLayer direction={flipDirection} />
          )}
          
          {/* Current pages wrapped with navigation context */}
          <BookNavigationProvider value={{ navigateToPortfolioPage }}>
            <div className={`pages-container ${isSinglePage ? 'single' : 'spread'}`}>
              {!isSinglePage && currentPages.length === 2 && (
                <>
                  {/* Left page */}
                  <div className="page page-left">
                    <div className="page-content">
                      {currentPages[0]?.component}
                    </div>
                  </div>
                  
                  {/* Spine/gutter */}
                  <div className="book-spine" />
                  
                  {/* Right page */}
                  <div className="page page-right">
                    <div className="page-content">
                      {currentPages[1]?.component}
                    </div>
                  </div>
                </>
              )}
              
              {(isSinglePage || currentPages.length === 1) && (
                <div className="page page-single">
                  <div className="page-content">
                    {currentPages[0]?.component}
                  </div>
                </div>
              )}
            </div>
          </BookNavigationProvider>
        </div>
      </div>
    </div>
  );
}
