import { useMemo } from 'react';

export const debounce = <T extends unknown[]>(
  action: (...args: T) => void,
  delay: number
) => {
  let timeoutId = null;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      action.apply(null, args);
    }, delay);
  };
};

export const useDebounce = <T extends unknown[]>(
  action: (...args: T) => void,
  delay: number
) => {
  return useMemo(() => debounce(action, delay), []);
};
