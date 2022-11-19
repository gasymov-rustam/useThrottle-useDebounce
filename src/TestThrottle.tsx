import { useCallback, useEffect } from 'react';
import { useThrottle } from './hooks/useThrottle';

export const TestThrottle = () => {
  const callBack = useCallback(() => console.log('MouseMove'), []);
  // const throttled = throttle(callBack, 2000);
  const throttle = useThrottle(callBack, 500);

  useEffect(() => {
    document.addEventListener('mousemove', throttle);

    return () => document.removeEventListener('mousemove', throttle);
  }, [throttle]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
