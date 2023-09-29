const {getProducts} = require ('../Products/getProducts');
const {calculateAverageRating} = require('../auxfunction/calculateAverageRating')

const handlerGetProducts = async (req, res)=>{
    try{

        const {name} = req.query;
        let products = name? await  getProducts(name) : await getProducts();

        products = products.map(product =>{        
            
            const averageRating = calculateAverageRating(product.rating);
            product.averageRating = parseFloat(averageRating.toFixed(2));
            return product;  
        }); 
        
        res.status(200).json(products)

    }catch(err){    
        res.status(404).json({error: err.message});
    }
};

module.exports = {handlerGetProducts}