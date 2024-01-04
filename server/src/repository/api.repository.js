const { connect } = require('../db');

async function createUserDb(name, surname, email, pwd) {
    const { users } = await connect();
    await users.insertOne({name, surname, email, pwd});
}

async function getUserByEmail(email) {
    const { users } = await connect();
    await users.find({email:email}).toArray();;
}

module.exports = { createUserDb, getUserByEmail };