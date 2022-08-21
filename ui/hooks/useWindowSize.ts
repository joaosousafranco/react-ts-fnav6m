import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return size;
};
