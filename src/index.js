var express = require('express');
var app = express();
const routes = require('./routes');


console.log('ligado');
app.use(express.json());
app.use(routes);
app.listen(9999);
