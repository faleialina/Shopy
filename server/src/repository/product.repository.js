const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllProductDb() {
    const { products } = await connect();
    return await products.find().toArray();
   
};

async function getByIdProductDb(id) {
    const { products } = await connect();
    return await products.find({id: new ObjectId(id) }).toArray();
};

async function createProductDb(product, user_id) {
    const { products } = await connect();
    await products.insertOne({ product, user_id });
};

async function updateProductDb(id, product, user_id) {
    const { products } = await connect();
    await products.updateOne({ id: new ObjectId(id) }, { $set: { product, user_id, id } });
};

async function deleteProductDb(id) {
    const { products } = await connect();
    await products.deleteOne({ id: new ObjectId(id) });
};


module.exports = { getAllProductDb, getByIdProductDb, createProductDb, updateProductDb, deleteProductDb };