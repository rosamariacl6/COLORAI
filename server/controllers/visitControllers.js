const connection = require("../config/db");
require("dotenv").config();

class visitControllers {
  //1. Añadir visita
  //localhost:4000/visit/addVisit

  addVisit = (req, res) => {
    let { service_id, user_id, date } = req.body;

    let sql = `INSERT INTO visit (service_id, user_id, date) VALUES ( "${Number(
      service_id
    )}","${user_id}", "${date}")`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  getHistory = (req, res) => {
    let { user_id } = req.params;
    let sql = `SELECT * from visit WHERE user_id = ${user_id}`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  deleteVisit = (req, res) => {
    let { visit_id } = req.params;
    visit_id = Number(visit_id);

    let sql = `DELETE FROM visit WHERE visit_id = "${visit_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new visitControllers();
