
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/WishlistSlice";

const WishlistCard = ({ id, name, image, price, description }) => {
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>Price: {price}</p>
      <button onClick={removeCard}>Remove</button>
    </div>
  );
};

export default WishlistCard;