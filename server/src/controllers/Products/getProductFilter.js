const db = require("../../db");

const getFilteredProducts = async (
  category,
  min,
  max,
  order,
  price,
  review
) => {
  let products = await db.Product.findAll();

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (min && max) {
    products = products.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  if (price) {
    if (price === "high") {
      products.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "low") {
      products.sort((a, b) => a.price - b.price);
    }
  }

  if (review) {
    products.forEach((product) => {
      const average =
        product.rating.reduce((total, raiting) => total + raiting, 0) /
        product.rating.length;
      product.averageRating = average;
    });
    products.sort((a, b) => b.averageRating - a.averageRating);
  }

  if (order) {
    if (order === "A-Z") {
      products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "Z-A") {
      products.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === "date") {
      products.sort((a, b) => a.createdAt - b.createdAt);
    }
  }
  return products;
};

module.exports = getFilteredProducts;
