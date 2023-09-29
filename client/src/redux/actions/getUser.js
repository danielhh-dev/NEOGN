import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk("user/fetchUser", async (id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
    }
})