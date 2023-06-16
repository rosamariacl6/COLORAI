var express = require("express");
var router = express.Router();
var multerSingle = require("../middleware/multerSingle");
const photo_questionControllers = require("../controllers/photo_questionControllers");

//1.añade una photo_question
//localhost:4000/photoQuestion/addPhotoQuestion
router.post("/addPhotoQuestion", photo_questionControllers.addPhotoQuestion);

//2.modifica una photo_question
//localhost:4000/photoQuestion/editPhotoQuestion/:photo_question_id
router.put(
  "/editPhotoQuestion/:photo_question_id",
  multerSingle("pruebaEdit"),
  photo_questionControllers.editPhotoQuestion
);

//3.borra de manera total una photo_question
//localhost:4000/photoQuestion/deletePhotoQuestion/:photo_question_id
router.delete(
  "/deletePhotoQuestion/:photo_question_id",
  photo_questionControllers.deletePhotoQuestion
);

//4.trae la vista de todas las photo_question de un test especifico
//localhost:4000/photoQuestion/allFromOneTest/:test_id
router.get(
  "/allFromOneTest/:test_id",
  photo_questionControllers.selectFromOneTest
);
//5.trae la vista de una sola photo_question
//localhost:4000/photoQuestion/onePhotoQuestion/:photo_question_id
router.get(
  "/onePhotoQuestion/:photo_question_id",
  photo_questionControllers.selectOnePhotoQuestion
);

module.exports = router;
