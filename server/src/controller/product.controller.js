const express = require('express');

const { buildResponse } = require('../helper/buildResponse');
const { getAllProduct, getByIdProduct, createProduct, updateProduct, deleteProduct } = require('../service/product.service')
const { isvalidProductId, isvalidProductBody } = require('../helper/validtion');

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllProduct();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:id', isvalidProductId, async (req, res) => {

    try {
        const { id } = req.params;
        const data = await getByIdProduct(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', isvalidProductBody, async (req, res) => {
    try {
        const { product, user_id } = req.body;
        const data = await createProduct(Product, user_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:id', isvalidProductId, isvalidProductBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { product, user_id } = req.body;
        const data = await updateProduct(id, Product, user_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:id', isvalidProductId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteProduct(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
});


module.exports = route;