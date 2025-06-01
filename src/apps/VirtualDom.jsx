import React, { useState } from "react";

const VirtualDom = () => {
  const textStr = `/*
    In traditional DOM manipulation, every UI change leads to direct changes in the DOM, which is slow and
    inefficient for complex applications. React uses a Virtual DOM, which is a lightweight JavaScript object
    representing the actual DOM.

    When state or props change, React updates the Virtual DOM first, compares it with the previous version using a
    process called diffing, and then applies the minimal set of changes to the real DOM. This makes updates much
    faster and more efficient.

    <!-- index.html -->
    <button onclick="increment()">Click Me</button>
    <p id="count">0</p>

    <script>
    let count = 0;
    function increment() {
        count++;
        document.getElementById("count").innerText = count; // Direct DOM manipulation
    }
    </script>

    // Counter.jsx (React with Virtual DOM)
    import React, { useState } from "react";

    export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>{count}</p>
        </div>
    );
    }


    */
`;
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Virtual Dom</h1>
      <pre>{textStr}</pre>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>{count}</p>
      </div>
    </>
  );
};

export default VirtualDom;
