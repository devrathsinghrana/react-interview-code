import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makePaymentRequest,
  retryPayment,
} from "../store/actions/paymentActions";

const RetryPaymentApp = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.makepayment);

  const handlePayment = () => {
    dispatch(makePaymentRequest({ amount: 100, method: "card" }));
  };

  const handleRetry = () => {
    dispatch(retryPayment());
  };

  return (
    <div>
      <h1>Mini Payment App</h1>
      <button onClick={handlePayment} disabled={loading}>
        Pay ₹100
      </button>
      {error && <button onClick={handleRetry}>Retry</button>}
      <div>
        {loading && <p>Processing payment...</p>}
        {success && <p>Payment Successful!</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RetryPaymentApp;
