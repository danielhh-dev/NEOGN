// src/components/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/slices/productsSlice";


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
    <div>
      
      <h1>Home</h1>
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
