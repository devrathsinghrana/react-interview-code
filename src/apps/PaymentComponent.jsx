import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiatePayment } from "../features/payment/paymentSlice";

const PaymentComponent = () => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);

  const handlePay = () => {
    dispatch(initiatePayment({ amount: 100 }));
  };

  return (
    <div>
      <button onClick={handlePay}>Pay ₹100</button>
      {payment.loading && <p>Processing...</p>}
      {payment.success && <p>Payment Successful ✅</p>}
      {payment.error && <p>Error: {payment.error}</p>}
    </div>
  );
};

export default PaymentComponent;
