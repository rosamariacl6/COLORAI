const connection = require("../config/db");
require("dotenv").config();

class photoControllers {
  makePhoto = (req, res) => {
    const { user_id, image, photo_name } = req.body;

    let sql = `INSERT INTO photo (user_id,image,photo_name) VALUES (${user_id}, "${image}"), "${photo_name}" `;
    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });

    // let sql = `INSERT INTO photo (user_id,image,photo_name) VALUES (${user_id}, "${image}"), "${photo_name}" `;
    // connection.query(sql, (error, result) => {
    //   console.log(error);
    //   error ? res.status(400).json({ error }) : res.status(201).json(result);
    // });
  };
}

module.exports = new photoControllers();
