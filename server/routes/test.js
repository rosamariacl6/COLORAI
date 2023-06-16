var express = require("express");
const testControllers = require("../controllers/testControllers");
var router = express.Router();

//1.createTest
//localhost:4000/test/createTest
router.post("/createTest", testControllers.createTest);

//2.Trae la informacion de un test
//localhost:4000/test/oneTest/:test_id
router.get("/oneTest/:test_id", testControllers.selectOneTest);

//3.Trae la informacion de todos los test
//localhost:4000/test/allTest
router.get("/alltest", testControllers.selectAllTest);

//4.Editar un test
//localhost:4000/test/editTest
router.put("/editTest/:test_id", testControllers.editTest);

//5.Borrar logico de un test
//localhost:4000/test/deleteTest/:test_id
router.delete("/deleteTest/:test_id", testControllers.deleteTest);

//6.Filtrar por test tipo 1
//localhost:4000/test/getTestTypeOne
router.get("/getTestTypeOne", testControllers.getTestTypeOne);

router.get("/getTestTypeTwo", testControllers.getTestTypeTwo);

router.get("/getTestTypeOneAndTwo", testControllers.getTestTypeOneAndTwo);

module.exports = router;
