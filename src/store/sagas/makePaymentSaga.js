import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  MAKE_PAYMENT_REQUEST,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_FAILURE,
  RETRY_PAYMENT,
} from "../actions/paymentActions";

const fakePaymentAPI = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Random success or failure
      Math.random() > 0.5
        ? resolve({ message: "Payment successful" })
        : reject("Payment failed");
    }, 1000);
  });
};

const getLastPaymentPayload = (state) => state.makepayment.lastPayload;

function* makePaymentSaga(action) {
  try {
    const response = yield call(fakePaymentAPI, action.payload);
    yield put({ type: MAKE_PAYMENT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: MAKE_PAYMENT_FAILURE, error });
  }
}

function* retryPaymentSaga() {
  const lastPayload = yield select(getLastPaymentPayload);
  if (lastPayload) {
    yield put({ type: MAKE_PAYMENT_REQUEST, payload: lastPayload });
  }
}

export default function* paymentWatcher() {
  yield takeLatest(MAKE_PAYMENT_REQUEST, makePaymentSaga);
  yield takeLatest(RETRY_PAYMENT, retryPaymentSaga);
}
