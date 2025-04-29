import { useEffect, useRef, useState } from "react";

function useThrottle(callback, delay) {
  const [isThrottling, setIsThrottling] = useState(false);
  const lastCall = useRef(0);

  useEffect(() => {
    if (isThrottling) {
      const timer = setTimeout(() => {
        setIsThrottling(false);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isThrottling, delay]);

  const throttledFunction = (...args) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      callback(...args);
      lastCall.current = now;
    } else {
      setIsThrottling(true);
    }
  };

  return throttledFunction;
}

export default useThrottle;
