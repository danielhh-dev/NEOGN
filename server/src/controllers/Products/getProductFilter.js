const db = require('../../db');
const {calculateAverageRating} = require ('../auxfunction/calculateAverageRating');


const getFilteredProducts = async (category, min, max, order) => {
  
  let productsPrefilter = await db.Product.findAll();
  
  productsPrefilter = productsPrefilter.map(product =>{
    const averageRating = calculateAverageRating(product.rating);
    product.averageRating = parseFloat(averageRating.toFixed(2));
    return product;
    });



  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (min && max) {
    products = products.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  if (order) {
    if (order === 'A-Z') {
      products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'Z-A') {
      products.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === "date") {
      products.sort((a, b) => a.createdAt - b.createdAt);
    } else if (order === 'rating') {
      products.sort((a, b) => b.averageRating - a.averageRating);
    }else if (order === "price-high") {
        products.sort((a, b) => b.price - a.price);
    } else if (order === "price-low") {
        products.sort((a, b) => a.price - b.price);
    } 
  } 
  return products;
};

module.exports = {getFilteredProducts};
