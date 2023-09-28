const {Op} = require('sequelize')
const db = require ('../../database/db')

const getProducts = async (name) => {
    const products = await db.Product.findAll();
  
    if (!products) throw new Error('Products not found');
  
    return products;
  };
  
  module.exports = {getProducts};
  