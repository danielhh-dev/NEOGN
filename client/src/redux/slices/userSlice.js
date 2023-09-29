import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../actions/getUser";

const initialState = {
  name: null,
  username: null,
  email: null,
  photo_secure_url: null,
  address: null,
  favorites: null,
  isDisable: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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

export const { getUser, clearUser } = userSlice.actions;
export default userSlice.reducer;