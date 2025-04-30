import React from "react";
import ThrottlingUsingCustomHooks from "./apps/ThrottlingUsingCustomHooks";
import ThrottledUsingSettimeout from "./apps/ThrottledUsingSettimeout";
import ThrottlingUsingLoadash from "./apps/ThrottlingUsingLoadash";
import { Link, Route, Routes } from "react-router";
import DebouncingUsingHook from "./apps/DebouncingUsingHook";
import DebouncingUsingLodash from "./apps/DebouncingUsingLodash";
import DebouncingUsingSetTimeout from "./apps/DebouncingUsingSetTimeout";

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

      <div>
        <Link to={"/hook-debounce"}>Debouncing using custom hooks</Link>
      </div>
      <div>
        <Link to={"/load-ash-debounce"}>Debouncing using loadash</Link>
      </div>
      <div>
        <Link to={"/settimeout-debounce"}>Debouncing using settimeout</Link>
      </div>

      <Routes>
        <Route index element={<ThrottlingUsingCustomHooks />} />
        <Route path="/load-ash-throttle" element={<ThrottlingUsingLoadash />} />
        <Route
          path="/settimeout-throttle"
          element={<ThrottledUsingSettimeout />}
        />

        <Route path="/hook-debounce" element={<DebouncingUsingHook />} />
        <Route path="/load-ash-debounce" element={<DebouncingUsingLodash />} />
        <Route
          path="/settimeout-debounce"
          element={<DebouncingUsingSetTimeout />}
        />
      </Routes>
    </>
  );
}

export default App;
