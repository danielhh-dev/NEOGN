const { getProducts } = require("../Products/getProducts");

const handlerGetProducts = async (req, res) => {
  try {
    const { name } = req.query;
    let products = name ? await getProducts(name) : await getProducts();
    
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { handlerGetProducts };
