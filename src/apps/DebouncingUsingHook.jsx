import React from "react";

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
  const debouncedQuery = useDebounce(query, 500); // For input state

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

function SearchFunction() {
  const debouncedFn = useDebounce(
    (value) => {
      console.log("Debounced API call with:", value);
    },
    500,
    true
  ); // Third argument `true` means "debounce as function"

  return <input onChange={(e) => debouncedFn(e.target.value)} />;
}
