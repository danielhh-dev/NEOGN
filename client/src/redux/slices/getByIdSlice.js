
import { createSlice } from "@reduxjs/toolkit";

const getByIdSlice = createSlice({
  name: "products",
  initialState:{
    detail:{},
  },
  reducers: {
    setProductDetail(state, action) {
      console.log("Updating product data in state. Current state:", state);
      console.log("Updating product data with payload:", action.payload);
      state.detail = action.payload;
      console.log("Updated state:", state);
    },
  },
});

export const { setProductDetail } = getByIdSlice.actions;

export default getByIdSlice.reducer;
