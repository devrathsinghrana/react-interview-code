import React from "react";
import ScrollDiv from "../components/ScrollDiv";
import useThrottle from "../hooks/useThrottle";

const ThrottlingUsingCustomHooks = () => {
  const handleScroll = (e) => {
    console.log("Scrolled", e);
  };
  const throttledScroll = useThrottle(handleScroll, 2000);
  const props = {
    throttledScroll,
    appNAme: "ThrottlingUsingCustomHooks",
    bgColor: "red",
  };
  return <ScrollDiv {...props} />;
};

export default ThrottlingUsingCustomHooks;
