// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { setProducts, fetchProducts } from "../redux/productsSlice";
import Pagination from "../components/Pagination"
import { setCurrentPage, setTotalItems} from "../redux/paginationSlice";
import productsData from "../fakeProducts.json"


const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const currentPage = useSelector((state) => state.pagination.currentPage );
  const totalItems = useSelector((state) => state.pagination.totalItems);
  const itemsPerPage = 10;


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow  = products.slice(startIndex, endIndex)

  console.log("startIndex:", startIndex);
  console.log("endIndex:", endIndex);
  console.log("productsToShow:", productsToShow);
    


  
  useEffect(() => {
    dispatch(fetchUser());

    if (status === "idle") {
      // Solo cargamos productos si el estado está en "idle"
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);


  useEffect(() => {
  if (status === "succeeded" && productsData.length > 0) {
    dispatch(setProducts(productsData));
    dispatch(setTotalItems(productsData.length));
  }
}, [dispatch, status])


  const handlePageChange = (newPage) => {
    console.log("handlePageChange called with newPage:", newPage);
    dispatch(setCurrentPage(newPage));
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3x1 font-semibold mb-4">Home</h1>
      <p className="mb-2">Welcome, {user.name}</p>
      <p className="mb-8">Email: {user.email}</p>
      <p> Total Products {totalItems}  </p>

      <div >
        {productsToShow.map((product) => (
          <div key={product.id} className="m-4">
            <img src={product.image} alt={product.title}className="max-w-xs" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-lg">${product.price}</p>
            <p className="mb-2">{product.description}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>
      
      <Pagination
      itemsPerPage={10}
      totalItems={productsData.length}
      currentPage={currentPage} 
      onPageChange={handlePageChange}
      />

    </div>
  );
};

export default Home;
