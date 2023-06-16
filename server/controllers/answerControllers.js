const { log } = require("console");
const connection = require("../config/db");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

class AnswerController {
  createAnswer = (req, res) => {
    let result;

    req.body.forEach((e) => {
      let sql = `INSERT INTO answer (test_id,question_id,answer,user_id) VALUES (${e.test_id},${e.question_id},"${e.answer}",${e.user_id})`;

      connection.query(sql, (error, result) => {
        if (error) res.status(400);
        result = result;
      });
    });
    res.status(200).json("TODOoK");
  };

  //2. trae la vista todas las respuestas de un usuario
  oneUserAnswer = (req, res) => {
    const user_id = req.params.user_id;

    let sql = `SELECT * FROM answer WHERE answer.user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
  //3. edita un answer
  editAnswer = (req, res) => {
    let answer_id = req.params.answer_id;

    const { test_id, question_id, answer } = req.body;

    let file = "";

    let sql = `UPDATE answer SET test_id = "${test_id}",question_id = "${question_id}" , answer = "${answer}" WHERE answer_id = "${answer_id}"`;

    if (req.file != undefined) {
      file = req.file.filename;
      sql = `UPDATE answer SET test_id = "${test_id}",question_id = "${question_id}" , answer = "${answer}", image = "${file}" WHERE answer_id = "${answer_id}"`;
    }
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result, file });
    });
  };

  //4.borra de manera total un answer
  deleteAnswer = (req, res) => {
    let answer_id = req.params.answer_id;

    let sql = `DELETE FROM answer WHERE answer_id = "${answer_id}"`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //5.muestra todos los datos de una answer
  selectOneAnswer = (req, res) => {
    let answer_id = req.params.answer_id;

    let sql = `SELECT * FROM answer WHERE answer_id = "${answer_id}"`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  //6.- Guarda la foto de una en una desde la camara del dispositivo
  //localhost:4000/asnwer/addPicture/
  addPicture = (req, res) => {
    // let { dataPic64, picName } = req.body.data;
    let data = req.body;
    let clientId = parseInt(req.body[0].user_id);

    data.forEach((e, i) => {
      let dataPic64 = e.dataPic64;
      //   let user_id = e.user_id;
      let fileName;
      if (i === 0) {
        fileName = `${clientId}-front.jpg`;
      } else if (i === 1) {
        fileName = `${clientId}-left.jpg`;
      } else if (i === 2) {
        fileName = `${clientId}-right.jpg`;
      } else if (i === 3) {
        fileName = `${clientId}-top.jpg`;
      }
      let path1 = path.join(
        __dirname,
        `../public/images/fotoCliente/${fileName}`
      );
      fs.writeFile(path1, dataPic64, "base64", (error) => {
        if (error) res.status(500).json({ error });
      });
      let sql = `INSERT INTO photo (user_id, photo_name) VALUES (${clientId}, "${fileName}") `;

      connection.query(sql, (error, result) => {
        // console.log(error);
        error && res.status(400).json({ error });
      });
    });
    res.status(201).json("Fotos guardadas correctamente");
  };

  getAnswersColorimetria = (req, res) => {
    let { user_id } = req.params;

    let sql = `SELECT answer FROM answer
    JOIN test ON answer.test_id = test.test_id WHERE test.type = 3  AND 
    answer.user_id = ${user_id} `;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  getAnswerText = (req, res) => {
    let { user_id } = req.params;

    let sql = `SELECT * FROM answer
    JOIN test ON answer.test_id = test.test_id WHERE test.type = 1  AND 
    answer.user_id = ${user_id}`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };

  getAnswerOption = (req, res) => {
    let { user_id } = req.params;

    let sql = `SELECT * FROM answer
    JOIN test ON answer.test_id = test.test_id WHERE test.type = 2  AND 
    answer.user_id = ${user_id}`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
}

module.exports = new AnswerController();
