// src/redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../fakeProducts.json";

const initialState = {
  products: [],
  searchTerm: '',
  status: "idle",
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
      state.status = "succeeded";
    },
    setItemsPerPage: (state, action) =>{
      state.itemsPerPage = action.payload
      state.status = "succeeded";
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload
      state.status = "succeeded";
    }
  },
});

// funcion para buscar los productos 
export const buscarProductos =(productos, busqueda)=>{
  return productos.filter((producto) =>
  producto.name.toLowerCase().includes(busqueda.toLowerCase())

  );
};
export const selectSearchTerm = (state) => state.products.searchTerm;

export const selectFilteredProducts = (state) => {
  const searchTerm = selectSearchTerm(state);
  return state.products.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export const { setProducts, setLoading, setError, setCurrentPage, setItemsPerPage, setTotalItems, setSearchTerm } = productsSlice.actions;


// Exporta una función asincrónica para cargar los productos desde el archivo JSON
//mas adelante tenemos que cambiar esto por el endpoint del back
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading()); // Indicamos que la carga está en progreso

    const response = await new Promise((resolve) => {
      setTimeout(() =>{
        resolve(productsData);
      }, 1000);
    })

    // En lugar de cargar productos ficticios, ahora cargamos los datos del archivo JSON
    dispatch(setProducts(productsData)); // Cargamos los productos desde el archivo JSON en el estado
  } catch (error) {
    dispatch(setError()); // Indicamos que ha ocurrido un error
  }
};

export const changePage = (page) => async (dispatch) => {
  try {
    dispatch(setLoading());
    dispatch(setCurrentPage(page))
  }catch (error){
    dispatch(setError(error.message));
  }
}

export default productsSlice.reducer;
