var express = require("express");
var router = express.Router();
// const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const userControllers = require("../controllers/userControllers");

//1.- createUser
//localhost:4000/users/createUser
router.post("/createUser", userControllers.createUser);

//2.- metodo delogin
//localhost:4000/users/login
router.post("/login", userControllers.login);

// 3. trae la informacion de un usuario
//localhost:4000/users/oneUser/:user_id
router.get("/oneUser/:user_id", userControllers.selectOneUser);
module.exports = router;

//4. trae toda la informacion de todos los usuarios
//localhost:4000/users/allUsers
router.get("/allUsers", userControllers.selectAllUsers);

//5. edita un usuario
//localhost:4000/users/editUser/:userId
router.put(
  "/editUser/:user_id",
  multerSingle("user"),
  userControllers.editUser
);

//6. eliminar un usuario de manera logica
//localhost:4000/users/deleteUser/:userId
router.delete("/deleteUser/:user_id", userControllers.deleteUser);

//7. trae informacion de usuario para editar
//localhost:4000/users/editUser/:user_id
router.get("/getEditUser/:user_id", userControllers.getEditOneUser);

//8. buscador
//localhost:4000/users/browser
router.get("/browser", userControllers.browser);

//9. Muestra a todos los profesionales
//localhost:4000/users/allProfessional
router.get("/allProfessional", userControllers.allProfessional);

//10. Muestra a todos los clientes
//localhost:4000/users/allClients
router.get("/allClients", userControllers.allClients);

//11. Bloquea a un cliente
//localhost:4000/users/blockClient
router.put("/blockClient/:user_id", userControllers.blockClient);

//12. Desbloquea a un cliente
//localhost:4000/users/toUnlockClient
router.put("/toUnlockClient/:user_id", userControllers.toUnlockClient);

//13.- createProfessional
//localhost:4000/users/createProfessional
router.post("/createProfessional", userControllers.createProfessional);

//14. trae informacion de un cliente para editar
//localhost:4000/users/editUser/:user_id
router.get("/getEditClient/:user_id", userControllers.getEditOneClient);

module.exports = router;
