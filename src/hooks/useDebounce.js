import { useEffect, useRef, useState, useCallback } from "react";

export default function useDebounce(input, delay) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  const timeoutRef = useRef(null);

  const cancel = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Debounce for function
  const debouncedFn = useCallback(
    (...args) => {
      cancel();
      timeoutRef.current = setTimeout(() => {
        input(...args);
      }, delay);
    },
    [input, delay]
  );

  useEffect(() => {
    if (typeof input !== "function") {
      cancel();
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(input);
      }, delay);
    }

    return cancel;
  }, [input, delay]);

  return typeof input === "function" ? debouncedFn : debouncedValue;
}
