const fastify = require('fastify')()
fastify.register(require('fastify-cors'), { 
    origin : ['http://localhost:8080']
})
const routes = require('../routes');
fastify.register(routes);
module.exports = fastify