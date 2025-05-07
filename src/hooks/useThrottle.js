import { useRef } from "react";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  const throttledFunction = (...args) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      callback(...args);
      lastCall.current = now;
    }
  };

  return throttledFunction;
}

export default useThrottle;
