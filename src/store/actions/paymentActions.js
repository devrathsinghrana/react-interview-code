export const MAKE_PAYMENT_REQUEST = 'MAKE_PAYMENT_REQUEST';
export const MAKE_PAYMENT_SUCCESS = 'MAKE_PAYMENT_SUCCESS';
export const MAKE_PAYMENT_FAILURE = 'MAKE_PAYMENT_FAILURE';
export const RETRY_PAYMENT = 'RETRY_PAYMENT';

export const makePaymentRequest = (payload) => ({ type: MAKE_PAYMENT_REQUEST, payload });
export const retryPayment = () => ({ type: RETRY_PAYMENT });