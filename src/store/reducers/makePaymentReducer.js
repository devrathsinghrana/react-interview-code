import {
    MAKE_PAYMENT_REQUEST,
    MAKE_PAYMENT_SUCCESS,
    MAKE_PAYMENT_FAILURE,
  } from '../actions/paymentActions';
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
    lastPayload: null,
  };
  
  export default function makePaymentReducer(state = initialState, action) {
    switch (action.type) {
      case MAKE_PAYMENT_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
          lastPayload: action.payload,
        };
      case MAKE_PAYMENT_SUCCESS:
        return { ...state, loading: false, success: true };
      case MAKE_PAYMENT_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }