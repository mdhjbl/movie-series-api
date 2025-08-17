const express = require('express');
const app = express();
require("dotenv").config()
const db = require("./config/db")

app.get('/', (req, res) => {
  res.send('Server is listening on port 3000');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
