import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import paymentReducer from "../features/payment/paymentSlice";
import rootSaga from "../sagas/rootSaga";
import makePaymentReducer from "./reducers/makePaymentReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    makepayment: makePaymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
