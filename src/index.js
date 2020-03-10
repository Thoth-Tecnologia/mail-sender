const express = require('express'), 
    cors = require('cors'), 
    app = express(), 
    routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 11111,
    HOST = '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`ONLINE NA PORTA ${PORT}`));
