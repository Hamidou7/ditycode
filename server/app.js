require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");

const Products = require("./models/ProductSchema");
const DefaultData = require("./defaultData");
const cors = require("cors");
const router = require('./routes/router')

app.use(express.json());
app.use(cors());
app.use(router);

const port = 9005;

app.listen(port, () => {
  console.log(`Le serveur s'exécute sur le numéro de port ${port}`);
});

DefaultData();
