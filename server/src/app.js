const express = require('express');
const cors = require('cors');
const router = require('./routers');
const handlerError = require('./errors/handlerError');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api', router);
app.use(handlerError);


module.exports = app;
