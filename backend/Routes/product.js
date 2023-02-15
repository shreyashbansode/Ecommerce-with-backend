const express = require('express');

const route = express.Router();




route.get("/get", require("../controllers/product").getUser)
route.post("/", require("../controllers/product").createuser)


module.exports = route;