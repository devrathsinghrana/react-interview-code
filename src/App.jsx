import React from "react";
import ThrottlingUsingCustomHooks from "./apps/ThrottlingUsingCustomHooks";
import ThrottlingUsingLoadash from "./apps/ThrottlingUsingLoadash";
import { Link, Route, Routes } from "react-router";
import DebouncingUsingHook from "./apps/DebouncingUsingHook";
import DebouncingUsingLodash from "./apps/DebouncingUsingLodash";
import DebouncingUsingSetTimeout from "./apps/DebouncingUsingSetTimeout";
import PaymentComponent from "./apps/PaymentComponent";
import GetTotalScoreObjectForStudents from "./apps/GetTotalScoreObjectForStudents";
import PostfixEvaluatorApp from "./apps/PostfixEvaluatorApp";
import UniqueTripletsInArray from "./apps/UniqueTripletsInArray";
import GroupSameCategoryObjects from "./apps/GroupSameCategoryObjects";
import OptionalSpreadingApp from "./apps/OptionalSpreadingApp";
import SetVsMap from "./apps/SetVsMap";
import RetryPaymentApp from "./apps/RetryPaymentApp";
import MakingInputUsingCreateElement from "./apps/MakingInputUsingCreateElement";
import CallApplyBind from "./apps/CallApplyBind";
import FunctionCurryingAndRecusrsion from "./apps/FunctionCurryingAndRecusrsion";
import CartPage from "./apps/CartPage";
import WeakSetWeakMap from "./apps/WeakSetWeakMap";
import TailwindCssApp from "./apps/TailwindCssApp";

function App() {
  return (
    <>
      <div style={{ height: "30vh", overflow: "auto" }}>
        <div>
          <Link to={"/"}>Throttle using custom hooks</Link>
        </div>
        <div>
          <Link to={"/load-ash-throttle"}>Throttle using loadash</Link>
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
        <div>
          <Link to={"/payment-app"}>Payment App</Link>
        </div>
        <div>
          <Link to={"/total-score-obj"}>Total score of students App</Link>
        </div>
        <div>
          <Link to={"/postfix-evaluator"}>Postfix Evaluator App</Link>
        </div>
        <div>
          <Link to={"/unique-triplet-in-array-sum-zero"}>
            Unique triplet in array sum zero App
          </Link>
        </div>
        <div>
          <Link to={"/group-same-cat-objects"}>
            Group Same Category Objects App
          </Link>
        </div>
        <div>
          <Link to={"/optional-spreading"}>Optional Spreading App</Link>
        </div>
        <div>
          <Link to={"/set-vs-map"}>Set vs Map App</Link>
        </div>
        <div>
          <Link to={"/retry-payment-saga"}>Retry Payment App</Link>
        </div>
        <div>
          <Link to={"/react-create-element"}>React Create Element App</Link>
        </div>
        <div>
          <Link to={"/call-apply-bind"}>Call Apply Bind App</Link>
        </div>
        <div>
          <Link to={"/currying-recursion"}>curryin and recursion</Link>
        </div>
        <div>
          <Link to={"/cart-app"}>Cart App</Link>
        </div>
        <div>
          <Link to={"/weak-set-map-app"}>Weak Set Map App</Link>
        </div>
        <div>
          <Link to={"/tailwind-css-example"}>Tailwind css example App</Link>
        </div>
      </div>

      <Routes>
        <Route index element={<ThrottlingUsingCustomHooks />} />
        <Route path="/payment-app" element={<PaymentComponent />} />
        <Route path="/tailwind-css-example" element={<TailwindCssApp />} />
        <Route path="/weak-set-map-app" element={<WeakSetWeakMap />} />
        <Route path="/load-ash-throttle" element={<ThrottlingUsingLoadash />} />
        <Route path="/hook-debounce" element={<DebouncingUsingHook />} />
        <Route path="/load-ash-debounce" element={<DebouncingUsingLodash />} />
        <Route path="/postfix-evaluator" element={<PostfixEvaluatorApp />} />
        <Route path="/optional-spreading" element={<OptionalSpreadingApp />} />
        <Route path="/retry-payment-saga" element={<RetryPaymentApp />} />
        <Route path="/cart-app" element={<CartPage />} />
        <Route
          path="/currying-recursion"
          element={<FunctionCurryingAndRecusrsion />}
        />
        <Route
          path="/group-same-cat-objects"
          element={<GroupSameCategoryObjects />}
        />
        <Route
          path="/unique-triplet-in-array-sum-zero"
          element={<UniqueTripletsInArray />}
        />
        <Route
          path="/total-score-obj"
          element={<GetTotalScoreObjectForStudents />}
        />
        <Route
          path="/settimeout-debounce"
          element={<DebouncingUsingSetTimeout />}
        />
        <Route path="/set-vs-map" element={<SetVsMap />} />
        <Route path="/call-apply-bind" element={<CallApplyBind />} />
        <Route
          path="/react-create-element"
          element={<MakingInputUsingCreateElement />}
        />
      </Routes>
    </>
  );
}

export default App;
