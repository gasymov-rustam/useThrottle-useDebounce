export const debounce = <T extends unknown[]>(
  callback: (...args: T[]) => void,
  delay: number = 1000
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      return callback?.(args);
    }, delay);
  };
};
