let productController = require("../controllers/productController.js");

async function routes (fastify, options) {
    fastify.get('/', function (request, reply) {
        reply.send({message: 'ping success', code: 200})
    })
    fastify.get('/products', productController.getProducts);
    fastify.get('/products/location/:location', productController.getProductByLocation);
    fastify.get('/products/locations', productController.getAllLocationsOfDatabaseProduct);
}

module.exports = routes;