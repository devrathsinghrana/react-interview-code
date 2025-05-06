import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiatePayment } from "../features/payment/paymentSlice";

const reducerPureFn = (state, action) => {
  if (action.type === "SET_AMOUNT") {
    return { ...state, amount: action.payload };
  }
  return state;
};
const PaymentComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(reducerPureFn, {
    amount: 0,
  });
  const payment = useSelector((state) => state.payment);

  const handlePay = () => {
    dispatch(initiatePayment(state));
  };

  const handleChange = (e) => {
    setState({ type: "SET_AMOUNT", payload: e.target.value });
  };

  console.log("payment>>>", payment);

  return (
    <div>
      <button onClick={handlePay}>Pay {state.amount}</button>
      <input type="number" value={state.amount} onChange={handleChange} />
      {payment.loading && <p>Processing...</p>}
      {payment.success && <p>Payment Successful ✅</p>}
      {payment.error && <p>Error: {payment.error}</p>}
    </div>
  );
};

export default PaymentComponent;
