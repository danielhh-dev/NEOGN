const db = require('../../database/db')

const calculateAverageRating = (ratingArray)=> {
  console.log('RATINGARRAY',ratingArray);
  const validRatings = ratingArray.filter(rating => typeof rating === 'number' && !isNaN(rating));
  const totalRating = validRatings.reduce((sum, rating) => sum + rating, 0);
  return validRatings.length > 0 ? totalRating / validRatings.length : 0;
}

const generateSKU = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8;
    let sku = '';  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      sku += characters.charAt(randomIndex);
    }  
    return sku;
  };

  
const createProduct = async (data) => {
  console.log("DATAAA", data)
    const product = {
        ...data,
        id :data.SKU ? data.SKU : generateSKU(),
    };
    
    let {id,name,description,category,image,price,stock,SKU,discount,rating,averageRating,isAvailable} = product
    const newProduct = await db.Product.create({
      id,  
      name,
      description,
      category,
      image,
      price,
      stock,
      SKU,
      discount,
      rating,
      averageRating,
      isAvailable,
      
    });
    console.log('np', newProduct)
    return newProduct;
};


module.exports = {createProduct,calculateAverageRating};