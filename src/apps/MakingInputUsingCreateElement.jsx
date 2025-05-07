import React, { useState } from "react";

const MakingInputUsingCreateElement = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value, Date.now());
    setState(e.target.value);
  };
  return React.createElement(
    "input",
    {
      type: "text",
      value: state,
      placeholder: "search input",
      onChange: handleChange,
    },
    null
  );
};

export default MakingInputUsingCreateElement;
