const server = require("./src/server");
const { conn } = require("./src/db.js");

const dataProducts = require("./api/db.json");

const { Product } = require("./src/db");
const PORT = 3000;

const calculateAverageRating = (ratingArray)=> {
    
   const validRatings = ratingArray.filter(rating => typeof rating === 'number' && !isNaN(rating));
  const totalRating = validRatings.reduce((sum, rating) => sum + rating, 0);
  return validRatings.length > 0 ? totalRating / validRatings.length : 0;
}







conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      let idHard = "SKU000";

      const products = dataProducts.map((product) => {
       
        calculateAverageRating(product.rating)
        const averageRating = calculateAverageRating(product.rating);
        product.averageRating = parseFloat(averageRating.toFixed(2));


        let number = parseInt(idHard.split("U")[1]);
        number = number + 1;
        if (number >= 100) {
          idHard = idHard;
          return {
            ...product,
            id: `SKU${number}`,
          };
        }
        if (number < 10) {
          idHard = `SKU00${number}`;
          return {
            ...product,
            id: idHard,
          };
        }
        idHard = `SKU0${number}`;
        return {
          ...product,
          id: idHard,
        };
        
      });
      console.log ("resultado", products)

      await Product.bulkCreate(products);

      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
