const {getFilteredProducts} = require ('../Products/getProductFilter');

const handlerFilterProducts =async(req,res)=>{
    try{
        const {category, min,max, order} = req.query;
        let productsFiltered = await getFilteredProducts( category,min,max,order);

        res.status(200).json(productsFiltered);


    }catch(err){
        res.status(500).json({error:err.mesagge});
    };
};

module.exports = {handlerFilterProducts};