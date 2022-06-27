import {useCallback, useRef} from 'react';
import dayjs from 'dayjs';

export const useThrottle = (fn, delay, dep) => {
  const timer = useRef(dayjs().valueOf());
  return useCallback(
    (args?: any) => {
      const currentTime = dayjs().valueOf();
      const diff = currentTime - timer.current;
      if (diff >= delay) {
        fn(args);
        timer.current = currentTime;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn, delay, ...dep],
  );
};
