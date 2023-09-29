// src/components/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts, changePage, setTotalItems } from "../redux/slices/productsSlice";
import Pagination from "../components/Pagination"
import productsData from "../fakeProducts.json"
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const currentPage = useSelector((state) => state.products.currentPage );
  const totalItems = useSelector((state) => state.products.totalItems);
  const itemsPerPage = 10;

  // console.log("startIndex:", startIndex);
  // console.log("endIndex:", endIndex);
  // console.log("productsToShow:", productsToShow);
  
  useEffect(() => {

    if (status === "idle") {
      // Solo cargamos productos si el estado está en "idle"
      dispatch(fetchProducts());
    }
  }, []);


  useEffect(() => {
  if (status === "succeeded" && productsData.length > 0) {
    dispatch(setProducts(productsData));
    dispatch(setTotalItems(productsData.length));
  }
}, [dispatch, status])


  const handlePageChange = (newPage) => {
    console.log("handlePageChange called with newPage:", newPage);
    dispatch(changePage(newPage));
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-hscreen">
      <SearchBar/>
      <h1  className="texte-3x1 font-semibold my-4 justify-center">Home</h1>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>
      
      <Pagination
        currentPage={currentPage} 
        handlePagination={handlePageChange}
        allProducts={products}
        productsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Home;
