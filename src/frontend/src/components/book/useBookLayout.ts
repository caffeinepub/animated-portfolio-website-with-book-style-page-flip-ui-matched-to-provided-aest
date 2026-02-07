import { useEffect, useState } from 'react';

export function useBookLayout() {
  const [isSinglePage, setIsSinglePage] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      setIsSinglePage(window.innerWidth < 768);
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  return { isSinglePage };
}
