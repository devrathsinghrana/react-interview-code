import { put, takeLatest, delay } from "redux-saga/effects";
import {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
} from "./paymentSlice";

function* handlePayment(action) {
  try {
    yield delay(2000); // simulating API delay
    const { amount } = action.payload;
    if (amount > 0) {
      yield put(paymentSuccess());
    } else {
      throw new Error("Invalid amount");
    }
  } catch (error) {
    yield put(paymentFailure(error.message));
  }
}

export function* watchPaymentSaga() {
  yield takeLatest(initiatePayment.type, handlePayment);
}
