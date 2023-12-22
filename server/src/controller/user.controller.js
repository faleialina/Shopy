const express = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await getUserById(_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        await createUser(name, surname, email, pwd);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, surname, email, pwd } = req.body;
        await updateUser(_id, name, surname, email, pwd);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await deleteUser(_id);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;