import { useEffect, useRef, useState, useCallback } from "react";

export default function useDebounce(input, delay) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  const timeoutRef = useRef(null);

  const cancel = (val) => {
    console.log("val", val);
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
      // It calls cancel("hey") again to be extra safe (clearing any old timeout before setting a new one).
      cancel("hey"); //calling it here will not give issue as it will clear if any previous timeouts were attached to it

      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(input);
      }, delay);
      //   cancel("hey");//calling it here will give issue as user may never get debounce value returned to it
    }

    // <-- this cleanup will be called BEFORE the next effect runs hence it is called before cancel("hey")
    /**
     * 
     * When a component mounts, Strict Mode will:

        Mount the component.

        Immediately unmount it.

        Mount it again (for real).

        thus we are seeing cancel output in page hard refresh but it is actually executing due to component unmount or dependency changes not on first mount.
     */
    return cancel; //this will ensure cancel runs only after state is changed due to update in query by user before timer is up and removes previous timer and on component unmount. it will not run before state update to give setTimeout time to attach to the onChange event else if it is called immediately it will not return debounce value
  }, [input, delay]);

  return typeof input === "function" ? debouncedFn : debouncedValue;
}
