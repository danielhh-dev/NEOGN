// src/components/Home.jsx
import { useEffect } from "react";
import {  useSelector } from "react-redux";
// import Pagination from "../components/Pagination"


const Home = () => {

  const user = useSelector((state) => state.user);
  // const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  // const currentPage = useSelector((state) => state.products.currentPage );
  // const itemsPerPage = 10;

  // console.log("startIndex:", startIndex);
  // console.log("endIndex:", endIndex);
  // console.log("productsToShow:", productsToShow);
  
  useEffect(() => {

    if (status === "idle") {
      // Solo cargamos productos si el estado está en "idle"
    }
  }, []);


  // const handlePageChange = (newPage) => {
  //   console.log("handlePageChange called with newPage:", newPage);
    
  // };

  return (
    <div className="flex flex-col items-center justify-center min-hscreen">
      <h1  className="texte-3x1 font-semibold my-4 justify-center">Home</h1>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>
      
      {/* <Pagination
        currentPage={currentPage} 
        handlePagination={handlePageChange}
        allProducts={products}
        productsPerPage={itemsPerPage}
      /> */}
    </div>
  );
};

export default Home;
