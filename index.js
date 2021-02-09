const express = require('express'),
    bodyParser = require('body-parser'),
    product = require('./modules/product.js'),
    server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/', product);

server.listen(3000, function () {
    console.log(`Server running at http://localhost:3000`);
})

