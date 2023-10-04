import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import fetchProducts from "../redux/actions/getProducts";
import HomeCard from "../components/Cards/HomeCard";
import TopCategories from "../components/Home/TopCategories";
import SearchCard from "../components/Cards/SearchCard";



const Search = () => {

  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);




  return (
    <div className="h-full pb-32">
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          By Category 
        </h1>
        <p className="text-red-500 text-[10px] font-semibold">FILTERS</p>
      </div>
      <div className="w-auto h-auto m-6">
        <TopCategories />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Produts
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