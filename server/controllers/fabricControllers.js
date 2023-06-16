const { json } = require("express");
const connection = require("../config/db");
require("dotenv").config();

class fabricControllers {
  //1. Crea una tela
  //localhost:4000/fabric/createFabric
  createFabric = (req, res) => {
    const { fabric_name } = JSON.parse(req.body.tela);
    let file = "";

    let sql = `INSERT INTO fabric (fabric_name) VALUES ("${fabric_name}")`;
    if (req.file != undefined) {
      file = req.file.filename;
      sql = `INSERT INTO fabric (fabric_name, fabric_img) VALUES ("${fabric_name}", "${file}")`;
    }
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result, file });
    });
  };

  //2. Edita una tela
  //localhost:4000/fabrics/editFabric
  editFabric = (req, res) => {
    let fabric_id = req.params.fabric_id;

    const { fabric_name } = req.body;

    let sql = `UPDATE fabric SET fabric_name = "${fabric_name}"`;
    let final = `WHERE fabric_id = "${fabric_id}"`;

    if (req.file != undefined) {
      let file = req.file.filename;
      sql += `, fabric_img = "${file}"`;
    }
    sql += final;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //3. Borra una tela
  //localhost:4000/fabrics/deleteFabric

  deleteFabric = (req, res) => {
    let fabric_id = req.params.fabric_id;

    let sql = `DELETE FROM fabric WHERE fabric_id = "${fabric_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //4. Muestra todas las telas
  //localhost:4000/fabric/showAllFabrics
  showAllFabrics = (req, res) => {
    let sql = "SELECT * FROM fabric";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };

  //5. Muestra una sola tela
  //localhost:4000/showOneFabric
  showOneFabric = (req, res) => {
    let fabric_id = req.params.fabric_id;
    let sql = `SELECT * FROM fabric WHERE fabric_id = "${fabric_id}"`;
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json(result);
    });
  };
}

module.exports = new fabricControllers();
