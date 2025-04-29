import React from "react";

const ScrollDiv = ({ throttledScroll,appNAme,bgColor }) => {
  return (
    <div
      onScroll={throttledScroll}
      style={{
        height: "100px",
        width: "100vw",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "1500px",
          width: "50vw",
          backgroundColor: bgColor,
        }}
      >
        Scroll me! - {appNAme}
      </div>
    </div>
  );
};

export default ScrollDiv;
