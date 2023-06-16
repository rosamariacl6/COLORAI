var express = require("express");
var router = express.Router();
const visitControllers = require("../controllers/visitControllers");

//1.- AÑADIR VISITA
//localhost:4000/visit/addVisit
router.post("/addVisit", visitControllers.addVisit);

//2- TRAER HISTORIAL VISITAS
router.get("/getHistory/:user_id", visitControllers.getHistory);

//2- ELIMINAR HISTORIAL VISITAS
router.delete("/deleteVisit/:visit_id", visitControllers.deleteVisit);

module.exports = router;
