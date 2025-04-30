import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebouncingUsingHook = () => {
  return (
    <div>
      <p>DebouncingUsingHook</p>
      <p>
        Search value - <SearchValue />
      </p>
      <p>
        Search function - <SearchFunction />
      </p>
    </div>
  );
};

export default DebouncingUsingHook;

function SearchValue() {
  const [query, setQuery] = useState("");
  //   custom hooks themselves don’t have a lifecycle — but the hooks they call inside them do, and their cleanup will happen before the component is unmounted, just like with regular hooks.
  const debouncedQuery = useDebounce(query, 500); // For input state

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

function SearchFunction() {
  const debouncedFn = useDebounce((value) => {
    console.log("Debounced API call with:", value);
  }, 500);

  return <input onChange={(e) => debouncedFn(e.target.value)} />;
}
