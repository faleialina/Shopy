const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllUserDb() {
    const { users } = await connect();
    return await users.find().toArray();
}

async function getUserByIdDb(id) {
    const { users } = await connect();
    return await users.find({ _id: new ObjectId(id) }).toArray();
}

async function createUserDb(name, surname, email, pwd) {
    const { users } = await connect();
    await users.insertOne({ name, surname, email, pwd });
}

async function updateUserDb(id, name, surname, email, pwd) {
    const { users } = await connect();
    await users.updateOne({ id: new ObjectId(id) }, { $set: { name, surname, email, pwd, id } });
}

async function deleteUserDb(id) {
    const client = await pool.connect();
    const { users } = await connect();
    await users.deleteOne({ id: new ObjectId(id) });
}


module.exports = { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb };