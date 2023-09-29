const db = require('../../database/db');

const getProductById = async (id) => {
  const product = await db.Product.findByPk(id);
  
  return product;
};

module.exports = {getProductById};
