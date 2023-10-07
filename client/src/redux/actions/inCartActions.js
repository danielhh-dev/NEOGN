import { addToCart } from "../slices/inCartSlice";

const addToCartAction = (productData) => {
    return (dispatch) => {
        dispatch(addToCart(productData))
    }
}
export default addToCartAction