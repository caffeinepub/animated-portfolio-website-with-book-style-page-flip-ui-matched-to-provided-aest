import { createContext, useContext } from 'react';

interface BookNavigationContextValue {
  navigateToPortfolioPage: (pageIndex: number) => void;
}

const BookNavigationContext = createContext<BookNavigationContextValue | null>(null);

export function useBookNavigation() {
  const context = useContext(BookNavigationContext);
  if (!context) {
    throw new Error('useBookNavigation must be used within BookNavigationProvider');
  }
  return context;
}

export const BookNavigationProvider = BookNavigationContext.Provider;
