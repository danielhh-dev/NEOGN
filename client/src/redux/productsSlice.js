// src/redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
export default productsSlice.reducer;

// Función para simular carga de productos ficticios
export const loadProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading()); // Indicamos que la carga está en progreso

    // Simulamos la obtención de productos ficticios
    const fictitiousProducts = [
      {
        id: 1,
        title: "Product 1",
        price: 29.99,
        description: "Description for Product 1",
        image: "https://example.com/product1.jpg",
        rating: {
          rate: 4.5,
        },
      },
      {
        id: 2,
        title: "Product 2",
        price: 39.99,
        description: "Description for Product 2",
        image: "https://example.com/product2.jpg",
        rating: {
          rate: 3.8,
        },
      },
      // Agrega más productos ficticios según sea necesario
    ];

    dispatch(setProducts(fictitiousProducts)); // Cargamos los productos ficticios en el estado
  } catch (error) {
    dispatch(setError()); // Indicamos que ha ocurrido un error
  }
};
