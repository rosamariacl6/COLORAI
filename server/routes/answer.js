var express = require("express");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const AnswerController = require("../controllers/answerControllers");

//1. Crea una answer
//localhost:4000/answer/createAnswer
router.post("/createAnswer", AnswerController.createAnswer);

//2. trae la vista todas las respuestas de un usuario
//localhost:4000/answer/OneUserAnswer/:user_id
router.get("/oneUserAnswer/:user_id", AnswerController.oneUserAnswer);

//3. edita un answer
//localhost:4000/answer/editAnswer/:answer_id
router.put(
  "/editAnswer/:answer_id",
  multerSingle("pruebaAnswerEdit"),
  AnswerController.editAnswer
);

//4.borra de manera total un answer
//localhost:4000/answer/deleteAnswer/:answer_id
router.delete("/deleteAnswer/:answer_id", AnswerController.deleteAnswer);

//5.muestra todos los datos de una answer
//localhost:4000/answer/oneAnswer/:answer_id
router.get("/oneAnswer/:answer_id", AnswerController.selectOneAnswer);

//6.- Guarda la foto de una en una desde la camara del dispositivo
//localhost:4000/asnwer/addPicture/
router.post("/addPicture/", AnswerController.addPicture);

//7.- Trae las respuestas de un test de colirimetria
//localhost:4000/answer/getAnwsersColorimetria/:user_id
router.get("/getAnswerColor/:user_id", AnswerController.getAnswersColorimetria);

//9.-Trae las respuesdas de un test de tipo Texto
//localhost:4000/answer/getAnswerText/:user_id
router.get("/getAnswerText/:user_id", AnswerController.getAnswerText);

//10.-Trae las respuesdas de un test de tipo Options
//localhost:4000/answer/getAnswerOption/:user_id
router.get("/getAnswerOption/:user_id", AnswerController.getAnswerOption);

module.exports = router;
