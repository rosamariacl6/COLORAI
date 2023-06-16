const connection = require("../config/db");
require("dotenv").config();

class serviceControllers {
  //1. Trae todos los datos de los servicios
  //localhost:4000/service/allServices

  getAllServices = (req, res) => {
    let sql = "SELECT * FROM service ";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  //2. Trae los datos de un solo servicio
  //localhost:4000/service/getOneService

  getOneServices = (req, res) => {
    let service_id = req.params.service_id;
    let sql = `SELECT * FROM service WHERE service_id = "${service_id}"`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  //3.Crear un servicio
  //localhost:4000/service/createService

  createService = (req, res) => {
    const { service_name, beauty_salon_id } = req.body;

    let sql = `INSERT INTO service (service_name, beauty_salon_id) VALUES ( "${service_name}", "${beauty_salon_id}")`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };

  // 4.- Editar un servicio
  //localhost:4000/service/editService/:serviceId

  editService = (req, res) => {
    let service_id = req.params.service_id;

    const { service_name } = req.body;

    let sql = `UPDATE service SET service_name = "${service_name}" WHERE service_id = "${service_id}"`;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //5. eliminar un servicio
  //localhost:4000/service/deleteService/:serviceId
  deleteService = (req, res) => {
    let service_id = req.params.service_id;
    let sql = `DELETE FROM service WHERE service_id = "${service_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new serviceControllers();
