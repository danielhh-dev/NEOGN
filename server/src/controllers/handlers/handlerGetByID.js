const {getProductById} = require('../Products/getProductsById');


const handlerGetById = async (req, res) =>{
    try{
        const {id} = req.params;        
        let productById = await getProductById(id);
                
        res.status(200).json(productById);
    }catch(err){        
        res.status(404).json({error: err.message});
    }


}


module.exports = {handlerGetById};