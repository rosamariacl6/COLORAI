var express = require("express");
var router = express.Router();
const serviceControllers = require("../controllers/serviceControllers");

//1.- getAllServices
//localhost:4000/service/allServices
router.get("/allServices", serviceControllers.getAllServices);

//2.- getOneServices
//localhost:4000/service/getOneServices
router.get("/oneService/:service_id", serviceControllers.getOneServices);

//3.- createService
//localhost:4000/service/createService
router.post("/createService", serviceControllers.createService);

//4.- editService
//localhost:4000/service/editService
router.put("/editService/:service_id", serviceControllers.editService);

//5.- deleteService
//localhost:4000/service/deleteService
router.delete("/deleteService/:service_id", serviceControllers.deleteService);

module.exports = router;
