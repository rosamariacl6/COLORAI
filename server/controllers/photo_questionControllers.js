const connection = require("../config/db");
require("dotenv").config();

class photo_QuestionController {
  addPhotoQuestion = (req, res) => {
    let questions = req.body;
    let test_id = req.body[0].test_id;
    questions.forEach((elem) => {
      let sql = `INSERT INTO photo_question (test_id,question_id,photo_img) VALUES ("${elem.test_id}","${elem.question_id}","${elem.photo_img}")`;

      connection.query(sql, (error) => {
        if (error) throw error;
      });
    });
    res.status(201).json("todoOK");
  };

  //2.modifica una photo_question
  editPhotoQuestion = (req, res) => {
    let photo_question_id = req.params.photo_question_id;

    const { test_id, question_id, photo_question_name } = req.body;

    let sql = `UPDATE photo_question SET test_id = "${test_id}" , question_id = "${question_id}", photo_question_name = "${photo_question_name}"`;
    let final = `WHERE photo_question_id = "${photo_question_id}"`;

    if (req.file != undefined) {
      let file = req.file.filename;
      sql += `,photo_img = "${file}"`;
    }
    sql += final;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
  //3.borra de manera total una photo_question
  deletePhotoQuestion = (req, res) => {
    const photo_question_id = req.params.photo_question_id;

    let sql = `DELETE  FROM photo_question WHERE photo_question_id = "${photo_question_id}"`;
    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
  //4.trae la vista de todas las photo_question de un test especifico
  selectFromOneTest = (req, res) => {
    const test_id = req.params.test_id;

    let sql = `SELECT * FROM test WHERE test_id = "${test_id}" and is_deleted = 0`;

    let sql2 = `SELECT * FROM photo_question WHERE photo_question.test_id = "${test_id}"`;

    connection.query(sql, (error, resultTest) => {
      if (error) {
        res.status(400).json({ error });
      }
      connection.query(sql2, (error2, resultPhotoQuestion) => {
        if (error2) {
          res.status(400).json({ error2 });
        }
        res.status(200).json({ resultTest, resultPhotoQuestion });
      });
    });
  };
  //5.trae la vista de una sola photo_question
  selectOnePhotoQuestion = (req, res) => {
    const photo_question_id = req.params.photo_question_id;

    let sql = `SELECT * FROM photo_question WHERE photo_question_id = "${photo_question_id}"`;

    connection.query(sql, (error, result) => {
      if (error) console.log(error);
      error
        ? res.status(400).json({ error })
        : res.status(200).json({ result });
    });
  };
}

module.exports = new photo_QuestionController();
