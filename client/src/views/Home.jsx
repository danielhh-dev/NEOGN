import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import fetchProducts from "../redux/actions/getProducts";
import HomeCard from "../components/Cards/HomeCard";
import Slider from "../components/Home/Slider";
import TopCategories from "../components/Home/TopCategories";



const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products)
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
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
        <p className="text-red-500 text-[10px] font-semibold">SEE ALL</p>
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
        {products.products.map((product) => (
      <HomeCard  image={product.image} id={product.id} />
    ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
