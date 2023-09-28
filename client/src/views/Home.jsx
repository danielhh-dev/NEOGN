// src/components/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {

    if (status === "idle") {
      // Solo cargamos productos si el estado está en "idle"
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col items-center justify-center min-hscreen">
      <SearchBar/>
      <h1  className="texte-3x1 font-semibold my-4 justify-center">Home</h1>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
