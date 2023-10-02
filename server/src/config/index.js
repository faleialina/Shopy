require('dotenv').config('./.env');

const { PORT, HOST_DB, DATABASE } = process.env;
module.exports = { PORT, HOST_DB, DATABASE };