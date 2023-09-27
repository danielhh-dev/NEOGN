// src/redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../fakeProducts.json";

const initialState = {
  products: [],
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state) => {
      state.status = "failed";
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

// Exporta una función asincrónica para cargar los productos desde el archivo JSON
//mas adelante tenemos que cambiar esto por el endpoint del back
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading()); // Indicamos que la carga está en progreso

    // En lugar de cargar productos ficticios, ahora cargamos los datos del archivo JSON
    dispatch(setProducts(productsData)); // Cargamos los productos desde el archivo JSON en el estado
  } catch (error) {
    dispatch(setError()); // Indicamos que ha ocurrido un error
  }
};

export default productsSlice.reducer;
