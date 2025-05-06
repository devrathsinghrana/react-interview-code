import { all } from 'redux-saga/effects';
import { watchPaymentSaga } from '../features/payment/paymentSaga';

export default function* rootSaga() {
  yield all([
    watchPaymentSaga(),
  ]);
}
