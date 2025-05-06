import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    initiatePayment: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    paymentSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    paymentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { initiatePayment, paymentSuccess, paymentFailure } =
  paymentSlice.actions;
export default paymentSlice.reducer;
