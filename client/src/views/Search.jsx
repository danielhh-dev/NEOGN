import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../redux/actions/getProducts";
import TopCategories from "../components/Home/TopCategories";
import SearchCard from "../components/Cards/SearchCard";
import { LuSettings2 } from "react-icons/lu";
import FilterSortRange from "../components/FilterSortRange";

const Search = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [showFilter, setShowFilter] = useState(false);

  const toFilter = () => {
    setShowFilter(!showFilter); // Alternar la visibilidad del componente FilterSortRange
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="h-full pb-32">
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          By Category
        </h1>
        <button onClick={toFilter}>
          <LuSettings2 className="text-black-500 text-[30px] font-semibold" />
        </button>
      </div>
      {showFilter && <FilterSortRange />} {/* Renderizar FilterSortRange si showFilter es true */}
      <div className="w-auto h-auto m-6">
        <TopCategories />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Products
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-auto h-auto grid grid-cols-1 gap-4">
          {products.products.map((product) => (
            <SearchCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
