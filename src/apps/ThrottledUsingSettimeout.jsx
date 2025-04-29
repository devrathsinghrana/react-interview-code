import React, { useState } from "react";
import ScrollDiv from "../components/ScrollDiv";

function ThrottledUsingSettimeout() {
  const [scrollPosition, setScrollPosition] = useState(0);

  let timeout;

  const handleScroll = (e) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      console.log("Scrolled", e);
    }, 2000);
  };

  const props = {
    throttledScroll: handleScroll,
    appNAme: "ThrottledUsingSettimeout",
    bgColor: "green",
  };

  return <ScrollDiv {...props} />;
}

export default ThrottledUsingSettimeout;
