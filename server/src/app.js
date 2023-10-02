const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const user = require('./controller/user.controller');
const product = require('./controller/product.controller');
const api = require('./controller/api.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/product', product);
app.use('/api', api);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;