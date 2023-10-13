import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../redux/actions/getProducts";
import HomeCard from "../components/Cards/HomeCard";
import Slider from "../components/Home/Slider";
import TopCategories from "../components/Home/TopCategories";
import getFilter from '../redux/actions/getFilter';
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  // console.log("de products",products)
  products = products.slice(0, 4);

  let productFiltered = useSelector((state) => state.filter);
  let filtradolo = productFiltered.filterResult.results ? productFiltered.filterResult.results.slice(0, 4) : [];
  // console.log("el filtradolo", filtradolo)
  // console.log("productos  filtrados",productFiltered)
  

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getFilter({ category: 'Monitors' }));
  }, [dispatch]);

  

  return (
    <div className="h-full pb-32">
      <div className="h-auto mx-10 mt-10 w-auto">
        <Slider />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Top Categories
        </h1>
        <Link to="/Categories">
          <p className="text-red-500 text-[10px] font-semibold">SEE ALL</p>
        </Link>
      </div>
      <div className="w-auto h-auto m-6">
        <TopCategories />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Latest Products
        </h1>
        <p className="text-red-500 text-[10px] font-semibold">SEE ALL</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-auto h-auto grid grid-cols-2 gap-4">

        {filtradolo && filtradolo.length > 0
      ? filtradolo.map((product, i) => (
          <HomeCard key={i} image={product.image_url[0]} id={product.id} price={product.price} name={product.name} />
        ))
      : products.map((product, i) => (
          <HomeCard key={i} image={product.image_url[0]} id={product.id} price={product.price} name={product.name}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;