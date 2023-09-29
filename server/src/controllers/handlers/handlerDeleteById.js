
const delProductById = require ('../Products/delProductById');


const handlerDeleteById = async (req, res) => {
    try{
        const {id} = req.params;
        await delProductById(id);
        res.status(200).json({message: "The product was removed"});
    }catch(err){
        console.log("err", err.message);
        res.status(400).json({error:"Error deleting product"});
    }

};


module.exports = {handlerDeleteById};