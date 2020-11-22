import { useState, useEffect } from 'react';

export default function useScrollY(htmlElementId, topValue = 70) {
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const pointY = window.scrollY;
      const topScroll = pointY > topValue;
      if (topScroll) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      if (htmlElementId && pointY > 0 && pointY < 10) {
        window.history.pushState({ page_id: htmlElementId || 1 }, '', htmlElementId);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollUp;
}
