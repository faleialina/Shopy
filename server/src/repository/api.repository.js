const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function createUserDb(name, surname, email, pwd) {
    const { users } = await connect();
    await users.insertOne({name, surname, email, pwd});
}

async function getUserByEmail(email) {
    const { users } = await connect();
    await users.find({email});
}

module.exports = { createUserDb, getUserByEmail };