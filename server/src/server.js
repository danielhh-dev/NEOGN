const express = require('express');
const server = express();

server.use(express.json()); 

const productsRoutes = require('./routes/routerProducts');

server.use('/products', productsRoutes);

module.exports = server;