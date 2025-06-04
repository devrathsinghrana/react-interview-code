import React from "react";

const ThrottlingAndDebouncingInPureJS = () => {
  const reqStr = `
    Here's a clear explanation of **Throttling** and **Debouncing** in **pure JavaScript**, tailored for someone like you with **5+ years of experience** in React and UI performance optimization:

---

## ✅ **Throttling vs Debouncing (In Plain Terms)**

| Concept        | What It Does                                                                                    | Use Case Example                            |
| -------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Throttling** | Limits the execution of a function to **once every X ms**, even if it's triggered continuously. | Window scroll, resize, API rate limit       |
| **Debouncing** | Delays function execution until after **X ms of inactivity**.                                   | Search input, autocomplete, form validation |

---

## 🧠 **1. Throttling in Pure JS**

> Execute a function at most once in a fixed time interval (say, every 200ms), no matter how many times the event is fired.

'''js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log('Scroll event at', Date.now());
}, 200);

window.addEventListener('scroll', handleScroll);
'''

---

## 🧠 **2. Debouncing in Pure JS**

> Wait until the user stops triggering the event for a specific time (say, 300ms) before calling the function.

'''js
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
const handleInput = debounce((event) => {
  console.log('User typed:', event.target.value);
}, 300);

document.getElementById('search').addEventListener('input', handleInput);
'''

---

## 🎯 **When I’ve Used These (Real Dev Experience)**

> In large UI apps, I use **debounce** in search bars or autosuggest boxes to reduce API calls while typing, and **throttle** for scroll-based features like infinite loading or animation triggers to avoid performance bottlenecks.

---

Would you like reusable utility versions of both for your React projects or custom hooks like 'useThrottle()' and 'useDebounce()'?
`;
  return (
    <div>
      ThrottlingAndDebouncingInPureJS
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {reqStr}
      </pre>
    </div>
  );
};

export default ThrottlingAndDebouncingInPureJS;
