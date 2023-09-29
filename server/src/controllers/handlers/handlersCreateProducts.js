
const {createProduct,calculateAverageRating} = require('../Products/createProduct')


const handlersCreateProducts = async (req, res)=>{
    
    try{
        const data = req.body;
        const newProduct =await createProduct(data);
        
        const averageRating = calculateAverageRating(newProduct.rating);
        newProduct.averageRating = parseFloat(averageRating.toFixed(2));
        
        res.status(200).json(newProduct);

    }catch(err){
        console.log("error crate", err.message)



    }
}


module.exports = handlersCreateProducts;