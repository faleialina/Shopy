const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllUserDb() {
    const { users } = await connect();
    return await users.find().toArray();
};

async function getUserByIdDb(_id) {
    const { users } = await connect();
    return await users.find({ _id: new ObjectId(_id) }).toArray();
};

async function createUserDb(name, surname, email, pwd) {
    const { users } = await connect();
    await users.insertOne({ name, surname, email, pwd });
};

async function updateUserDb(_id, name, surname, email, pwd) {
    const { users } = await connect();
    await users.updateOne({ _id: new ObjectId(_id) }, { $set: { name, surname, email, pwd } });
};

async function deleteUserDb(_id) {
    const { users } = await connect();
    await users.deleteOne({ _id: new ObjectId(_id) });
};


module.exports = { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb };