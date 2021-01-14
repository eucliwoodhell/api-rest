//get env
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
   knex : require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
      host : process.env.DB_HOST,
      port:process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      charset: process.env.DB_CHARSET
    }
  })
};
