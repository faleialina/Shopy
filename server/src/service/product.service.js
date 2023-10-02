const { getAllProductDb, getByIdProductDb, createProductDb, updateProductDb, deleteProductDb, patchProductDb } = require('../repository/product.repository');

async function getAllProduct() {
    const data = await getAllProductDb();
    if (!data.length) throw new Error('database is not full');
    return data;
};

async function getByIdProduct(id) {
    const data = await getByIdProductDb(id);
    if (!data.length) throw new Error('no such id');
    return data;
};

async function createProduct(product, user_id) {
    const data = await createProductDb(product, user_id);
    if (!data.length) throw new Error('object not created');
    return data;
};

async function updateProduct(id, product, user_id) {
    const data = await updateProductDb(id, product, user_id);
    if (!data.length) throw new Error('no such id')
    return data;
};

async function deleteProduct(id) {
    const data = await deleteProductDb(id);
    if (!data.length) throw new Error('no such id')
    return data;
}



module.exports = { getAllProduct, getByIdProduct, createProduct, updateProduct, deleteProduct };