import { MutableRefObject, useCallback, useRef } from 'react';

type TimeOut = MutableRefObject<ReturnType<typeof setTimeout>>;

type CallbackType = <T>(...args: T[]) => void;

export const useDebounce = <A,>(callBack: (args?: A[]) => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>() as TimeOut;

  return useCallback<CallbackType>(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callBack(args);
      }, delay);
    },
    [callBack, delay]
  );
};
