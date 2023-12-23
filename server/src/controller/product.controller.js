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

route.get('/:_id', isvalidProductId, async (req, res) => {

    try {
        const { _id } = req.params;
        const data = await getByIdProduct(_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/',  async (req, res) => {
    try {
        const { header, price } = req.body;
       await createProduct(header, price);
        buildResponse(res, 200,'success');
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:_id', isvalidProductId, isvalidProductBody, async (req, res) => {
    try {
        const { _id } = req.params;
        const { header, price } = req.body;
        const data = await updateProduct(_id, header, price);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:_id', isvalidProductId, async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await deleteProduct(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
});


module.exports = route;