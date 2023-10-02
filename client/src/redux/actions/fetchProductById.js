
import axios from "axios";
import { setProductDetail } from '../slices/getByIdSlice';
const fetchProductById = (id) => {
  return async function (dispatch) {
    try {
      console.log("Fetching product details for id:", id);
      const response = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      console.log("Product details response:", response.data);
      
      dispatch(setProductDetail(response.data)); 
      
    } catch (error) {
      console.error("Error getting detail:", error);
    }
  };
};

export default fetchProductById;
