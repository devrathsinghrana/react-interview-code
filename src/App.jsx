import React, { useState, useEffect, useRef } from "react";

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

// Usage in a component
function App() {
  const handleScroll = (e) => {
    console.log("Scrolled", e);
  };

  const throttledScroll = useThrottle(handleScroll, 2000); // Throttle every 200ms

  return (
    <div
      onScroll={throttledScroll}
      style={{
        height: "100px",
        width: "100vw",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "1500px",
          width: "50vw",
          backgroundColor: "#f0f0f0",
        }}
      >
        Scroll me!
      </div>
    </div>
  );
}

export default App;

/*
import React from 'react';
import { throttle } from 'lodash';

function App() {
  const handleScroll = (e) => {
    console.log('Scrolled', e);
  };

  const throttledScroll = throttle(handleScroll, 200); // Throttle every 200ms

  return (
    <div onScroll={throttledScroll} style={{ height: '1500px', backgroundColor: '#f0f0f0' }}>
      Scroll me!
    </div>
  );
}

export default App;

*/

/*
import React, { useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  let timeout;

  const handleScroll = (e) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setScrollPosition(window.scrollY);
      console.log('Scroll position:', window.scrollY);
    }, 200); // Throttle to execute after 200ms of no scrolling
  };

  return (
    <div onScroll={handleScroll} style={{ height: '1500px', backgroundColor: '#f0f0f0' }}>
      Scroll me!
    </div>
  );
}

export default App;

*/
