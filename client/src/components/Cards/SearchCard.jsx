// import React from "react";

// const SearchCard =({id,name, image,price,description}) =>{
//     return (
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//         <div className="w-1/3 h-auto">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>
//         <div className="w-2/3 pl-4">
//           <div className="text-gray-800 text-lg font-semibold">{name}</div>
//           <div className="text-gray-600 text-sm ">{description}</div>
//           <div className="text-red-600 text-sm font-semibold">$ {price}</div>

//         </div>
//       </div>
//     )
// };

// export default SearchCard

import React from "react";
import Heart from "../../utils/images/AppbarIcons/DarkHeart.png"
import {Link} from "react-router-dom"

const SearchCard = ({ id, name, image, price, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="flex flex-row md:flex-row">
      <Link to={`/${id}`}>
        <div className="md:w-1/5 ">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </Link>  
        <div className="md:w-1/2 md:pl-4">
          <div className="w-1/2 flex flex-col items-end ml-auto md: w-10 h-10 ">
          <img
            src={Heart}
            className="w-5 h-5 md:w-full md:h-auto object-cover rounded-lg"
          />
            
          </div>

          <div className="text-gray-800 text-lg font-semibold">{name}</div>
          <div className="text-gray-600 text-sm">{description}</div>

          <div className="price py-5 text-red-600 text-lg font-semibold " >$ {price}</div>
          <div className="button container w-1/2 flex flex-col items-end ml-auto md: w-10 h-10"> 
          <button
            className="button bg-red-500 text-white text-sm px-3 py-1 rounded-md mt-2 "
          >
            Buy
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;






