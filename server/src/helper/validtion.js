function isvalidProductId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id is not a number');
    if (id <= 0) throw new Error('id is negative');
    next();
};

function isvalidProductBody(req, res, next) {
    const { product, user_id } = req.body;
    if (!product) throw new Error('no value');
    if (!isNaN(product)) throw new Error('invalid value');
    if (isNaN(user_id)) throw new Error('invalid value');
    if (user_id <= 0) throw new Error('user_id is negative');
    next();
}

module.exports = { isvalidProductId, isvalidProductBody };