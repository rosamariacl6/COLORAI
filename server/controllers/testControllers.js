const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class testControllers {
  //1. Crear Test
  createTest = (req, res) => {
    const { test_name, type } = req.body;

    if (req.body.type === "Preguntas de desarrollo") {
      req.body.type = parseInt(1);
    } else if (req.body.type === "Preguntas tipo test") {
      req.body.type = parseInt(2);
    } else if (req.body.type === "Colorimetria") {
      req.body.type = parseInt(3);
    }
    let sql = `INSERT INTO test (test_name,type) VALUES ('${test_name}',${parseInt(
      req.body.type
    )})`;

    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };
  //2. Editar Test
  editTest = (req, res) => {
    let test_id = req.params.test_id;

    const { test_name } = req.body;

    let sql = `UPDATE test SET test_name = "${test_name}" WHERE test_id = "${test_id}"`;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
  //3. Seleccionar un Test
  selectOneTest = (req, res) => {
    const test_id = req.params.test_id;

    let sql = `SELECT * FROM test WHERE test_id = "${test_id}" and is_deleted = 0`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json({ result });
    });
  };
  //4. Seleccionar todos los test
  selectAllTest = (req, res) => {
    let sql = `SELECT * FROM test WHERE test.is_deleted = 0 GROUP BY test.test_id`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
      console.log(result);
    });
  };
  //4. Eliminar logicamente un test
  deleteTest = (req, res) => {
    let test_id = req.params.test_id;

    // let sql = `UPDATE test SET is_deleted = 1 WHERE test_id = "${test_id}"`;

    let sql = `DELETE from test where test_id = ${test_id}`

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  getTestTypeOne = (req, res) => {
    let sql = `SELECT * FROM test WHERE type = 1 and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  getTestTypeTwo = (req, res) => {
    let sql = `SELECT * FROM test WHERE type = 2 and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
  getTestTypeOneAndTwo = (req, res) => {
    let sql = `SELECT * FROM test WHERE (type = 1 OR type = 2) AND is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new testControllers();
