const connection = require("../config/db");
require("dotenv").config();

class adminControllers {
  //1. Trae todos los datos de todos los usuarios
  //localhost:4000/admin/getAllUsers

  getAllUsers = (req, res) => {
    let sql = "SELECT * FROM user ";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  // 2.- desahibilita un usuario de manera lógica
  //localhost:4000/admin/disableUser/:userId

  disableUser = (req, res) => {
    let { id } = req.params;

    let sql = `UPDATE user SET is_blocked = 1 WHERE user_id = "${id}"`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };

  // 3.- habilita un usuario de manera lógica
  //localhost:4000/admin/enableUser/:userId

  enableUser = (req, res) => {
    let { id } = req.params;

    let sql = `UPDATE user SET is_blocked = 0 WHERE user_id = "${id}"`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };
}

module.exports = new adminControllers();
