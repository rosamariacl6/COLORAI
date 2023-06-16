const connection = require("../config/db");
require("dotenv").config();

class salonControllers {
  // 1. Crear beauty_salon
  createSalon = (req, res) => {
    const { beauty_salon_name, city, address, user_id } = req.body;

    let sql = `INSERT INTO beauty_salon (beauty_salon_name,city,address,user_id) VALUES ("${beauty_salon_name}","","","${user_id}")`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };

  //2. traer informacion de UN solo centro/
  oneSalon = (req, res) => {
    const beauty_salon_id = req.params.beauty_salon_id;

    let sql = `SELECT * FROM beauty_salon WHERE beauty_salon_id = "${beauty_salon_id}"`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json({ result });
    });
  };

  //3. traer informacion de todos los beauty_salon
  selectAllSalon = (req, res) => {
    let sql = `SELECT * FROM beauty_salon`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //4. Modifica los datos del beauty_salon
  editSalon = (req, res) => {
    let beauty_salon_id = req.params.beauty_salon_id;
    const { beauty_salon_name, city, address } = req.body;

    let sql = `UPDATE beauty_salon SET beauty_salon_name = "${beauty_salon_name}", city = "${city}", address = "${address}" WHERE beauty_salon_id = "${beauty_salon_id}"`;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //5. trae la informacion para editar un beauty_salon
  getEditSalon = (req, res) => {
    let beauty_salon_id = req.params.beauty_salon_id;

    let sql = `SELECT * FROM beauty_salon WHERE beauty_salon_id = "${beauty_salon_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //6. Borra de manera total un beauty_salon
  deleteSalon = (req, res) => {
    let beauty_salon_id = req.params.beauty_salon_id;

    let sql = `DELETE from beauty_salon WHERE beauty_salon_id = "${beauty_salon_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  selectOneSalonUser = (req, res) => {
    const user_id = req.params.user_id;

    let sql = `SELECT * FROM beauty_salon WHERE beauty_salon.user_id = "${user_id}" `;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new salonControllers();
