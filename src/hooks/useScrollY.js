import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function useScrollY(htmlElementId, sectionRef, topValue = 70) {
  const history = useHistory();
  useEffect(() => {
    const handleScroll = () => {
      const { y } = sectionRef.current.getBoundingClientRect();
      if (y > -topValue && y < topValue) {
        history.push({
          pathname: '/',
          state: `#${htmlElementId}`,
        });
      }
    };

    if (sectionRef.current) {
      document.addEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
