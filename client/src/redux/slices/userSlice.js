import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../actions/getUser";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  photo_secure_url: "",
  address: "",
  whishlist: "",
  payment: "",
  order: "",
  isDisable: "",
  isAdmin: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {
        id,
        name,
        username,
        email,
        password,
        photo_secure_url,
        address,
        favorites,
        payment,
        order,
        isDisable,
        isAdmin,
      } = action.payload;
      state.id = id;
      state.name = name;
      state.username = username;
      state.email = email;
      state.password = password;
      state.favorites = favorites;
      state.photo_secure_url = photo_secure_url;
      state.address = address;
      state.whishlist = whishlist;
      state.payment = payment;
      state.order = order;
      state.isDisable = isDisable;
      state.isAdmin = isAdmin;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        const {
          name,
          username,
          email,
          photo_secure_url,
          address,
          favorites,
          isDisable,
          isAdmin,
        } = action.payload;
        state.name = name;
        state.username = username;
        state.email = email;
        state.photo_secure_url = photo_secure_url;
        state.address = address;
        state.favorites = favorites;
        state.isDisable = isDisable;
        state.isAdmin = isAdmin;
        state.status = "succeeded";
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { getUser, clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
