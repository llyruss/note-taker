const express = require('express');
const path = require('path');
const fs =require("fs")

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

