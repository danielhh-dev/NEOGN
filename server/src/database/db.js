require("dotenv").config();
const { Sequelize } = require("sequelize");
const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

OrderModel(sequelize);
UserModel(sequelize);
ProductModel(sequelize);

const { User, Order, Product } = sequelize.models;

Product.belongsToMany(User, { through: "ProductsUser" });
User.belongsToMany(Product, { through: "ProductsUser" });

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
