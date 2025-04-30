import React, { useState, useRef } from "react";

function DebouncingUsingSetTimeout() {
  const [query, setQuery] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      console.log("API call with:", value);
    }, 300);
  };

  return <input onChange={handleChange} value={query} />;
}

export default DebouncingUsingSetTimeout;
