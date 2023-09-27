import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
    }
})

const initialState = {
    name :"",
    username : "",
    email: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      theUser: (state, action) => {
        state.email = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.fulfilled, (state, action) => {
          const { name, username, email } = action.payload;
          state.name = name;
          state.username = username;
          state.email = email;
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
//exportamos el reducer
export default userSlice.reducer;