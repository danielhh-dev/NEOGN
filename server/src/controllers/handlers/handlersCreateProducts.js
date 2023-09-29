
const {createProduct} = require('../Products/createProduct');
const {calculateAverageRating} = require ('../auxfunction/calculateAverageRating')

const handlersCreateProducts = async (req, res)=>{    
    try{
        const data = req.body;
        const newProduct =await createProduct(data);
        
        const averageRating = calculateAverageRating(newProduct.rating);
        newProduct.averageRating = parseFloat(averageRating.toFixed(2));
        
        res.status(200).json(newProduct);

    }catch(err){
        console.log("error create", err.message);
    }
};


module.exports = handlersCreateProducts;