import { useCallback, useRef } from 'react';

type CallbackType = <T>(...args: T[]) => void;

export const useThrottle = <A,>(callBack: (args?: A[]) => void, delay: number) => {
  const isThrottled = useRef<boolean>();

  return useCallback<CallbackType>(
    (...args: any) => {
      if (isThrottled.current) {
        return;
      }

      callBack(args);
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), delay);
    },
    [callBack, delay]
  );
};
