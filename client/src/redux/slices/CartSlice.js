import { createSlice } from "@reduxjs/toolkit"

const inCartSlice = createSlice ({

    name: "inCart",
    initialState : {
        items : []

    },
    reducers: {
        addToCart:(state, action) => {
            state.items.push(action.payload)
        },
    },
})

export const {addToCart} = inCartSlice.actions
export default inCartSlice.reducer