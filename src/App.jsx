import React from "react";
import ThrottlingUsingCustomHooks from "./apps/ThrottlingUsingCustomHooks";
import ThrottledUsingSettimeout from "./apps/ThrottledUsingSettimeout";
import ThrottlingUsingLoadash from "./apps/ThrottlingUsingLoadash";
import { Link, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div>
        <Link to={"/"}>Throttle using custom hooks</Link>
      </div>
      <div>
        <Link to={"/load-ash-throttle"}>Throttle using loadash</Link>
      </div>
      <div>
        <Link to={"/settimeout-throttle"}>Throttle using settimeout</Link>
      </div>
      <Routes>
        <Route index element={<ThrottlingUsingCustomHooks />} />
        <Route path="/load-ash-throttle" element={<ThrottlingUsingLoadash />} />
        <Route
          path="/settimeout-throttle"
          element={<ThrottledUsingSettimeout />}
        />
      </Routes>
    </>
  );
}

export default App;
