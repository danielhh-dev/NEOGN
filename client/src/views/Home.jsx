// src/components/Home.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { setProducts,fetchProducts} from "../redux/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchUser());

    if (status === "idle") {
      // Solo cargamos productos si el estado está en "idle"
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div >
      <h1>Home</h1>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>

      <div >
        {products.map((product) => (
          <div key={product.id} >
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
