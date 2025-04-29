import React from "react";
import { throttle } from "lodash";
import ScrollDiv from "../components/ScrollDiv";

function ThrottlingUsingLoadash() {
  const handleScroll = (e) => {
    console.log("Scrolled", e);
  };

  const throttledScroll = throttle(handleScroll, 2000);

  const props = {
    throttledScroll,
    appNAme: "ThrottlingUsingLoadash",
    bgColor: "blue",
  };

  return <ScrollDiv {...props} />;
}

export default ThrottlingUsingLoadash;
