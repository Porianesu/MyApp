import {useCallback, useRef} from 'react';

export const useDebounce = (fn, delay, dep) => {
  const timer = useRef(null as any);
  return useCallback(
    (args?: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fn(args);
      }, delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn, delay, ...dep],
  );
};
