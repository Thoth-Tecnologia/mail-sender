const log = require("debug")("app"),
  express = require("express"),
  cors = require("cors"),
  app = express(),
  routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT,
  HOST = process.env.HOST;

app.listen(PORT, HOST, () => log(`ONLINE NA PORTA ${PORT}`));
