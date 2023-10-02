
import { createSlice } from "@reduxjs/toolkit";

const getByIdSlice = createSlice({
  name: "products",
  initialState:{
    detail:{},
  },
  reducers: {
    setProductDetail(state, action) {
      state.detail = action.payload;

    },
  },
});

export const { setProductDetail } = getByIdSlice.actions;

export default getByIdSlice.reducer;
