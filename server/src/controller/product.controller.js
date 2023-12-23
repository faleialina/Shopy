const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { getAllProduct, getByIdProduct, createProduct, updateProduct, deleteProduct } = require('../service/product.service')

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllProduct();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await getByIdProduct(_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { header, price } = req.body;
        await createProduct(header, price);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { header, price } = req.body;
        await updateProduct(_id, header, price);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await deleteProduct(_id);
        buildResponse(res, 200, 'success');
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
});


module.exports = route;