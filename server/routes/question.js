var express = require("express");
const questionControllers = require("../controllers/questionControllers");
var router = express.Router();

//1. CreateQuestion
//localhost:4000/question/createQuestion
router.post("/createQuestion", questionControllers.createQuestion);

//2. muestra informacion de UNA question
//localhost:4000/question/oneQuestion/:question_id
router.get("/oneQuestion/:question_id", questionControllers.setOneQuestion);

//3 muestra las preguntas de un test
//localhost:4000/question/allFromTest/:test_id
router.get("/allFromTest/:test_id", questionControllers.allFromTest);

//4. muestra TODAS las preguntas
//localhost:4000/question/allQuestion
router.get("/allQuestion", questionControllers.setAllQuestion);

//5. Edita una pregunta
//localhost:4000/question/editQuestion/:question_id
router.put("/editQuestion/", questionControllers.editQuestion);

//6.Borra de manera logica una question
//localhost:4000/question/deleteQuestion/:question_id
router.delete(
  "/deleteQuestion/:question_id",
  questionControllers.deleteQuestion
);

//7. muestra las preguntas con type de test uno
//localhost:4000/question/allQuestionsFromTypeOne
router.get(
  "/allQuestionsFromTypeOne",
  questionControllers.allQuestionsFromTypeOne
);
//8. muestra las preguntas con type de test dos
//localhost:4000/question/allQuestionsFromTypeTwo
router.get(
  "/allQuestionsFromTypeTwo",
  questionControllers.allQuestionsFromTypeTwo
);

module.exports = router;
