var express = require("express");
var router = express.Router();
const appointmentControllers = require("../controllers/appointmentControllers");

//1.- getAllAppointment
//localhost:4000/appointment/getAllAppointment
router.get("/allAppointment", appointmentControllers.getAllAppointment);

//2.- getOneAppointment
//localhost:4000/appointment/getOneAppointment
router.get(
  "/oneAppointment/:appointment_id",
  appointmentControllers.getOneAppointment
);

//3.- createAppointment
//localhost:4000/appointment/createAppointment
router.post("/createAppointment", appointmentControllers.createAppointment);

//4.- editAppointment
//localhost:4000/appointment/editAppointment
router.put(
  "/editAppointment/:appointment_id",
  appointmentControllers.editAppointment
);

//5.- deleteAppointment
//localhost:4000/appointment/deleteAppointment
router.delete(
  "/deleteAppointment/:appointment_id",
  appointmentControllers.deleteAppointment
);

//6.trae todas las citas de un usuario especifico
//localhost:4000/appointment/getOneAppointmentUser/:user_id
router.get(
  "/getOneAppointmentUser/:user_id",
  appointmentControllers.getAppointmentUser
);

module.exports = router;
