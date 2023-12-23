const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllProductDb() {
    const { products } = await connect();
    return await products.find().toArray();

};

async function getByIdProductDb(_id) {
    const { products } = await connect();
    return await products.find({ _id: new ObjectId(_id) }).toArray();
};

async function createProductDb(header, price) {
    const { products } = await connect();
    await products.insertOne({ header, price });
};

async function updateProductDb(_id, header, price) {
    const { products } = await connect();
    await products.updateOne({ _id: new ObjectId(_id) }, { $set: { header, price } });
};

async function deleteProductDb(_id) {
    const { products } = await connect();
    await products.deleteOne({ _id: new ObjectId(_id) });
};


module.exports = { getAllProductDb, getByIdProductDb, createProductDb, updateProductDb, deleteProductDb };