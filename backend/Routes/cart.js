const express = require('express')

const route = express.Router();

// route.post("/addtocart",require("../controllers/cart").createuser)
route.post("/create", require("../controllers/cart").createCart);
route.get("/get", require("../controllers/cart").getallCart);
route.get("/getcart/:id", require("../controllers/cart").getCart);
route.delete("/:id", require("../controllers/cart").deleteCart);
route.put("/put/:id", require("../controllers/cart").update);


module.exports = route;









