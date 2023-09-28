import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectFilteredProducts,
} from "../redux/slices/productsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [productName, setproductName] = useState("");
  const products = useSelector(selectFilteredProducts);

  const handleInputChange = (e) => {
    setproductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName) return alert("Por favor, ingrese un nombre del producto");
    dispatch(setSearchTerm(productName));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={productName}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-orange-500 md:bg-black text-white rounded-sm px-4"
        >
          Buscar
        </button>
      </form>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default SearchBar;
