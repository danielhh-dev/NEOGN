
// const createProduct = require('../Products/createProduct')

// const calculateAverageRating = (ratingArray)=> {
//     console.log('RATINGARRAY',ratingArray);
//     const validRatings = ratingArray.filter(rating => typeof rating === 'number' && !isNaN(rating));
//     const totalRating = validRatings.reduce((sum, rating) => sum + rating, 0);
//     return validRatings.length > 0 ? totalRating / validRatings.length : 0;
//   }

// const handlersCreateProducts = async (req, res)=>{
    
//     try{
//         const data = req.body;
//         const newProduct =await createProduct(data);
        
//         const averageRating = calculateAverageRating(newProduct.rating);
//         newProduct.averageRating = parseFloat(averageRating.toFixed(2));
        
//         res.statuts(400).json(newProduct);

//     }catch{
//         console.log("error crate", "req", req)



//     }
// }


// module.exports = handlersCreateProducts;