import { all } from "redux-saga/effects";
import { watchPaymentSaga } from "../features/payment/paymentSaga";
import paymentWatcher from "../store/sagas/makePaymentSaga";

export default function* rootSaga() {
  yield all([watchPaymentSaga(), paymentWatcher()]);
}
