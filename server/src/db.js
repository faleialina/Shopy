const { MongoClient } = require('mongodb');
const { HOST_DB, DATABASE } = require('./config/index');

async function connect() {
  const MongoDBclient = new MongoClient(HOST_DB);
  await MongoDBclient.connect();
  const db = MongoDBclient.db(DATABASE);
  return { users: db.collection('users'), products: db.collection('products') };
}

module.exports = { connect };