import axios from "axios"
import { setFilter } from "../slices/filterSlice"

const getFilter = (filter, value) => {

    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3000/api/products/filter/?${filter}=${value}`) 
            dispatch(setFilter(response.data))
        } catch (error) {
            
        }
    }
}

export default getFilter;