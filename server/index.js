const server = require("./src/server");
const { conn } = require("./src/db.js");
const axios = require("axios");
const calculateAverageRating = require("./src/controllers/helpers/calculateAverageRating.js")

const { Product, User } = require("./src/db");
const PORT = 3000;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      const dataProducts = await axios.get(
        "http://localhost:5000/products"
      );

      const dataUsers = await axios.get(
        "http://localhost:5000/users"
      );

      let idHard = "SKU000";

      const users = dataUsers.data.map((user) => {
        return user
      })

      for (const product of dataProducts.data) {
        if (!product.id) {
          let number = parseInt(idHard.split("U")[1]);
          number = number + 1;
          if (number >= 100) {
            idHard = idHard;
            product.id = `SKU${number}`;
          } else if (number < 10) {
            idHard = `SKU00${number}`;
            product.id = idHard;
          } else {
            idHard = `SKU0${number}`;
            product.id = idHard;
          }
        }

        let avgRating = calculateAverageRating(product.rating);
        avgRating = parseFloat(avgRating.toFixed(2));
        product.averageRating = avgRating;

        await Product.upsert(product, { where: { id: product.id } });
      }

      await User.bulkCreate(users)

      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
