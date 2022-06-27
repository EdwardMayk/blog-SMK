const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const ListRoutes = require("./routes/ListRoutes");
const port = 4000;

app.use(morgan("dev"));
app.use(ListRoutes);

app.listen(port);
console.log(port);
