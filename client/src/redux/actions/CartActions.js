import { addToCart } from "../slices/CartSlice";

const addToCartAction = (productData) => {
  return (dispatch) => {
    dispatch(addToCart(productData));
  };
};
export default addToCartAction;
