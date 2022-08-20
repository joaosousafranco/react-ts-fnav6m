import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return size;
};
