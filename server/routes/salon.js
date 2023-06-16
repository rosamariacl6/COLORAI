var express = require("express");
var router = express.Router();
const salonControllers = require("../controllers/salonControllers");

//1.createSalon
//localhost:4000/salon/createSalon
router.post("/createSalon", salonControllers.createSalon);

//2.trae la informacion de un beauty_salon
//localhost:4000/salon/oneSalon/:beauty_salon_id
router.get("/oneSalon/:beauty_salon_id", salonControllers.oneSalon);

//3.trae la informacion de todos los beauty_salon
//localhost:4000/salon/allSalon
router.get("/allSalon", salonControllers.selectAllSalon);

//4.Edita un beauty_salon
//localhost:4000/salon/editSalon/:beauty_salon_id
router.put("/editSalon/:beauty_salon_id", salonControllers.editSalon);

//5.trae la informacion de un servicio para editarlo
//localhost:4000/salon/getEditSalon/:beauty_salon_id
router.get("/getEditSalon/:beauty_salon_id", salonControllers.getEditSalon);

//6.Borra de forma total un beauty_salon
//localhost:4000/salon/deleteSalon/:beauty_salon_id
router.delete("/deleteSalon/:beauty_salon_id", salonControllers.deleteSalon);

//7.Trae los datos de un salon de un usuario especifico
//localhost:4000/salon/getOneSalon/:user_id
router.get("/getOneSalon/:user_id", salonControllers.selectOneSalonUser);

module.exports = router;
