var express = require("express");
const photoControllers = require("../controllers/photoControllers");
var router = express.Router();

//1.- Captura una imagen desde la webcam
//localhost:4000/photo/makePhoto
router.post("/makePhoto", photoControllers.makePhoto);

module.exports = router;
