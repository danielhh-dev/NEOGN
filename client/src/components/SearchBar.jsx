import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setSearchTerm, selectFilteredProducts } from '../redux/productsSlice';




const SearchBar = () => {

  const dispatch = useDispatch();
  const [productName, setproductName] = useState('');
  const products = useSelector(selectFilteredProducts);

  const handleInputChange = (e) =>{
    setproductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(!productName) return alert("Por favor, ingrese un nombre del producto");
    dispatch(setSearchTerm(productName));

  }
  return (
    <div>
   <input 
   type="text"
   placeholder='Buscar productos...'
   value={productName}
   onChange={handleInputChange}
   />
   <button
    type='submit'
    onClick={handleSubmit}
    style={{backgroundColor: 'black', color: 'white', border: "5px"}}
   
   >
    Buscar
    </button>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div> 
      ))}
    
    </div>
  )
}

export default SearchBar