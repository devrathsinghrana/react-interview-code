import React, { useMemo } from "react";
import { debounce } from "lodash";

function DebouncingUsingLodash() {
  const handleInput = (e) => {
    console.log("Debounced API call with:", e.target.value);
  };

  const debouncedInput = useMemo(() => debounce(handleInput, 300), []);

  return <input onChange={debouncedInput} />;
}

export default DebouncingUsingLodash;
