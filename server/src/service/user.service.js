const { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb } = require('../repository/user.repository');

async function getAllUser() {
    const data = await getAllUserDb();
    if (!data.length) throw new Error('database is not full');
    return data;
};

async function getUserById(_id) {
    const data = await getUserByIdDb(_id);
    if (!data.length) throw new Error('no such id');
    return data;
};

async function createUser(name, surname, email, pwd) {
    await createUserDb(name, surname, email, pwd);

};
async function updateUser(_id, name, surname, email, pwd) {
    await updateUserDb(_id, name, surname, email, pwd);
};

async function deleteUser(_id) {
    await deleteUserDb(_id);
};

module.exports = { getAllUser, getUserById, createUser, updateUser, deleteUser };