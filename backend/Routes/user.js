const express =require('express')


const route = express.Router();



route.post("/",require("../Controllers/user").createUser);
route.get("/",require("../Controllers/user").getalluser);
route.get("/:id",require("../Controllers/user").getuser);
route.delete("/:id",require("../Controllers/user").deleteuser);
route.put("/:id",require("../Controllers/user").update);


module.exports =route;