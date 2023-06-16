var express = require("express");
var router = express.Router();
var adminControllers = require("../controllers/adminControllers");

//1.- Trae los datos de todos los usuarios
router.get("/getAllUsers", adminControllers.getAllUsers);

//2.- deshabilita un usuario
//--------------------------------------------
router.put("/disableUser/:id", adminControllers.disableUser);

//3.- habilita un usuario
//--------------------------------------------
router.put("/enableUser/:id", adminControllers.enableUser);

module.exports = router;
