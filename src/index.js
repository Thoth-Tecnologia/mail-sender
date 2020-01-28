var express = require('express');
var app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.listen(9999);
