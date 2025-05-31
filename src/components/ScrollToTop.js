import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lista di selettori da scrollare
    const selectors = [
      '.main',
      '.main-content',
      '.content-title',
      '.content-box',
      'html',
      'body'
    ];

    let scrolled = false;

    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el && typeof el.scrollTo === 'function') {
        el.scrollTo({ top: 0, behavior: 'smooth' });
        scrolled = true;
      }
    }

    // Se nessun contenitore ha gestito lo scroll, fallback sulla window
    if (!scrolled) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
