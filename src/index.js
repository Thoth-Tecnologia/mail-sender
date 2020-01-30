var express = require('express');
var app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

const PORT = 9999
app.listen(PORT, () => {
    console.log(`ONLINE NA PORTA ${PORT}`)
});
