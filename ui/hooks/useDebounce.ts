import { useMemo } from 'react';
import { debounce } from '../../domain/services/DebounceService';

export const useDebounce = <T extends unknown[]>(
  action: (...args: T) => void,
  delay: number
) => {
  const memoizedDebounce = useMemo(() => debounce(action, delay), []);

  return memoizedDebounce;
};
