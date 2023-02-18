const express = require('express');

const route = express.Router();




route.post("/", require("../controllers/product").createuser)
route.get("/get", require("../controllers/product").getallUser)
route.get("/getuser/:id", require("../controllers/product").getUser);


module.exports = route;