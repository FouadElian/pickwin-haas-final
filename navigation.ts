import { useEffect, useState } from 'react';

/** Client-side SPA navigation without a router dependency. */
export const navigate = (to: string) => {
  if (window.location.pathname === to) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
};

/** Re-renders when the pathname changes (back/forward or navigate()). */
export const usePath = (): string => {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
};
