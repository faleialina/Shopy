const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { createUser, authUser } = require('../service/api.service');


const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        await createUser(name, surname, email, pwd);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        await authUser(email, pwd);
        buildResponse(res, 200, 'success');

    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;
