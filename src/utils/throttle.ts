export const throttle = <T extends (...args: never[]) => void>(
  func: T,
  delay: number
): T => {
  let lastExecutionTime = 0;

  return ((...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastExecutionTime >= delay) {
      lastExecutionTime = now;
      func(...args);
    }
  }) as T;
};
