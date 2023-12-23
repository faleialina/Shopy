const { getAllProductDb, getByIdProductDb, createProductDb, updateProductDb, deleteProductDb, patchProductDb } = require('../repository/product.repository');

async function getAllProduct() {
    const data = await getAllProductDb();
    if (!data.length) throw new Error('database is not full');
    return data;
};

async function getByIdProduct(_id) {
    const data = await getByIdProductDb(_id);
    if (!data.length) throw new Error('no such id');
    return data;
};

async function createProduct(header, price) {
    const data = await createProductDb(header, price);
    return data;
};

async function updateProduct(_id, header, price) {
    const data = await updateProductDb(_id, header, price);
    return data;
};

async function deleteProduct(_id) {
    const data = await deleteProductDb(_id);
    return data;
}



module.exports = { getAllProduct, getByIdProduct, createProduct, updateProduct, deleteProduct };