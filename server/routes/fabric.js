var express = require("express");
const fabricControllers = require("../controllers/fabricControllers");
var router = express.Router();
const multerSingle = require("../middleware/multerSingle");

//1.- createFabric
//localhost:4000/fabric/createFabric
router.post(
  "/createFabric",
  multerSingle("telas"),
  fabricControllers.createFabric
);

//2.- editFabric
//localhost:4000/fabric/editFabric
router.put(
  "/editFabric/:fabric_id",
  multerSingle("telas"),
  fabricControllers.editFabric
);

//3.- deleteFabric
//localhost:4000/fabric/deleteFabric
router.delete("/deleteFabric/:fabric_id", fabricControllers.deleteFabric);

//4.- showAllFabrics
//localhost:4000/fabric/showAllFabrics
router.get("/showAllFabrics", fabricControllers.showAllFabrics);

//5.- showOneFabric
//localhost:4000/fabric/showOneFabric
router.get("/showOneFabric/:fabric_id", fabricControllers.showOneFabric);

module.exports = router;
