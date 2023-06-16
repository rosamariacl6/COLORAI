const connection = require("../config/db");
require("dotenv").config();

class questionController {
  //1. crear una question
  createQuestion = (req, res) => {
    let questions = req.body;
    let test_id = req.body[0].test_id;

    questions.forEach((elem) => {
      let sql = `INSERT INTO question (test_id,question_id,question_name,question_text) VALUES (${elem.test_id},${elem.question_id},"${elem.question_name}","${elem.question_text}")`;
      connection.query(sql, (error) => {
        if (error) {
          res.status(500).json(error);
        }

        this.guardarOpciones(elem.questions, test_id);
      });
    });
    res.status(200).json("ENVIADO ");
  };

  guardarOpciones = (options, test_id) => {
    if (options != undefined) {
      options.forEach((e) => {
        if (e.fabric_id === undefined) {
          e.fabric_id = null;
        } else {
          e.fabric_id = parseInt(e.fabric_id);
        }
        let sqlOption = `INSERT INTO question_option (test_id,question_id,question_option_id,option_test_name,fabric_id) VALUES (${test_id},${e.question_id},${e.question_option_id},"${e.option_test_name}",${e.fabric_id})`;
        connection.query(sqlOption, (error) => {
          if (error) throw error;
        });
      });
    }
  };

  //2. trae la vista de una question
  setOneQuestion = (req, res) => {
    const question_id = req.params.question_id;

    let sql = `SELECT * FROM question WHERE question_id = "${question_id}" and is_deleted = 0 `;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //3. trae la vista de todas las preguntas de un test especifico
  allFromTest = (req, res) => {
    const test_id = req.params.test_id;

    let sql = `SELECT * FROM test WHERE test_id = ${Number(
      test_id
    )}  and is_deleted = 0`;
    let sql2 = `SELECT * FROM question WHERE question.test_id = ${Number(
      test_id
    )} and is_deleted = 0`;

    connection.query(sql, (error, resultTest) => {
      if (error) {
        res.status(400).json({ error });
      }
      connection.query(sql2, (error2, resultQuestion) => {
        if (error2) {
          res.status(400).json({ error2 });
        }
        res.status(200).json({ resultTest, resultQuestion });
      });
    });
  };

  //4.trae la vista de todas las preguntas
  setAllQuestion = (req, res) => {
    let sql = `SELECT * FROM question WHERE is_deleted=0  
    ORDER BY question.test_id `;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
      console.log(result);
    });
  };

  //5.Modifica una pregunta
  editQuestion = (req, res) => {
    // const question_id = req.params.question_id;
    const { question_name, question_text, question_id } = req.body;

    let sql = `UPDATE question SET question_name = "${question_name}", question_text = "${question_text}" WHERE question_id = "${question_id}"`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //6. Borrado logico de una question
  deleteQuestion = (req, res) => {
    const question_id = req.params.question_id;

    // let sql = `UPDATE question SET is_deleted = 1 WHERE question_id = "${question_id}"`;

    let sql = `DELETE FROM question WHERE question_id = "${question_id}"`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  allQuestionsFromTypeOne = (req, res) => {
    let sql = `SELECT *
    FROM question
    JOIN test ON question.test_id = test.test_id
    WHERE test.type = 1`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  allQuestionsFromTypeTwo = (req, res) => {
    let sql = `SELECT *
    FROM question
    JOIN test ON question.test_id = test.test_id
    WHERE test.type = 2`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new questionController();
