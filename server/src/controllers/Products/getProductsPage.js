const db = require("../../db");

const getProductsPage = async (page) => {
  const allProducts = await db.Product.findAll();

  const lastProduct = page * 10;
  const firstProduct = lastProduct - 10;
  const currentProducts = allProducts.slice(firstProduct, lastProduct);

  page = Number(page);

  const next = page + 1 <= Math.ceil(allProducts.length / 10) ? page + 1 : null;
  const prev = page - 1 >= 1 ? page - 1 : null;
  console.log(page + 1);

  const data = {
    info: {
      count: allProducts.length,
      pages: Math.ceil(allProducts.length / 10),
      next: next ? `http://localhost:3000/api/products?page=${next}` : next,
      prev: prev ? `http://localhost:3000/api/products?page=${prev}` : prev,
    },
    results: currentProducts,
  };

  return data;
};

module.exports = getProductsPage;
