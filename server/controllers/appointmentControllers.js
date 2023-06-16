const connection = require("../config/db");
require("dotenv").config();

class appointmentControllers {
  //1.- Trae los datos de todas las citas
  //localhost:4000/appointment/AllAppointment
  getAllAppointment = (req, res) => {
    let sql = "SELECT * FROM appointment";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  //2.- Trae los datos de una sola cita
  //localhost:4000/appointment/getOneAppointment
  getOneAppointment = (req, res) => {
    let appointment_id = req.params.appointment_id;
    let sql = `SELECT * FROM appointment WHERE appointment_id = "${appointment_id}"`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  //3.- Crear una cita
  //localhost:4000/appointment/createAppointment
  createAppointment = (req, res) => {
    const { service_id, beauty_salon_id, user_id, feedback } = req.body;

    let sql = `INSERT INTO appointment (service_id, beauty_salon_id, user_id, feedback) VALUES ("${service_id}", "${beauty_salon_id}", "${user_id}", "${feedback}")`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };

  // 4.- Editar una cita
  //localhost:4000/appointment/editAppointment/:appointment_id

  editAppointment = (req, res) => {
    let appointment_id = req.params.appointment_id;

    const { service_id, beauty_salon_id, user_id, feedback } = req.body;

    let sql = `UPDATE appointment SET service_id = "${service_id}", beauty_salon_id = "${beauty_salon_id}", user_id = "${user_id}", feedback = "${feedback}" WHERE appointment_id = "${appointment_id}"`;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //5. eliminar una cita
  //localhost:4000/appointment/deleteAppointment/:appointment_id
  deleteAppointment = (req, res) => {
    let appointment_id = req.params.appointment_id;
    let sql = `DELETE FROM appointment WHERE appointment_id = "${appointment_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //6.trae todas las citas de un usuario especifico
  //localhost:4000/appointment/getOneAppointmentUser/:user_id
  getAppointmentUser = (req, res) => {
    const user_id = req.params.user_id;

    let sql = `SELECT * FROM appointment WHERE appointment.user_id = ${user_id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new appointmentControllers();
