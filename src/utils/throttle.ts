export const throttle = <T extends unknown[]>(
  callback: (...args: T[]) => void,
  delay: number = 1000
) => {
  let timer = false;

  return (...args: any) => {
    if (!timer) {
      callback(args);
      timer = true;

      setTimeout(() => {
        timer = false;
      }, delay);
    }
  };
};
