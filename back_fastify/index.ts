require('dotenv').config();
const fastify = require('./config/app');

fastify.listen(process.env.SERVER_PORT, () =>
  console.log(`listening on port ${process.env.SERVER_PORT}!`),
);