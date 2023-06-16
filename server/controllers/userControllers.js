const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  enviarCorreoRegistroNormal,
  enviarCorreoRegistroProfesional,
} = require("../config/nodemailer");
require("dotenv").config();

class userControllers {
  //1.Crear un cliente
  //localhost:4000/users/createUser
  createUser = (req, res) => {
    const { name, last_name, email, gender, birth_date, skin_tone, phone } =
      req.body;

      console.log(birth_date);
    // Generar una contraseña aleatoria de longitud 8
    const password = generarContraseñaAleatoria(8);

    let avatar = "";
    if (req.file != undefined) {
      avatar = req.file.filename;
    } else {
      avatar = "avatar.jpg";
    }

    // Función para generar una contraseña aleatoria
    function generarContraseñaAleatoria(longitud) {
      const caracteres =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let contraseña = "";

      for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indice];
      }

      return contraseña;
    }

    let saltRounds = 8;
    bcrypt.genSalt(saltRounds, function (err, saltRounds) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        let sql = `INSERT INTO user (name,last_name,email,password,avatar,gender, birth_date, skin_tone, type,phone) VALUES ( "${name}", "${last_name}", "${email}","${hash}","${avatar}", "", "${birth_date}", "", "2","")`;

        connection.query(sql, (error, result) => {
          console.log(error);
          error
            ? res.status(400).json({ error })
            : res.status(201).json(result);
        });
        enviarCorreoRegistroNormal(
          email,
          name,
          last_name,
          password,
          "./public/images/logoCorreo/logo.png"
        ); // Llama a la función main para enviar la contraseña aleatoria por correo electrónico
      });
    });
  };

  // 2.login
  //localhost:4000/users/login
  login = (req, res) => {
    let { email, password } = req.body;

    let sql = `SELECT * FROM user WHERE email = '${email}'`;

    connection.query(sql, (error, result) => {
      console.log(result);
      //en caso de error en la consulta
      if (error) return res.status(400).json(error);
      //en caso de no encontrar un user con dicho user_name o mail.
      if (!result || !result.length || result[0].is_deleted == 1) {
        res.status(401).json("Usuario no Registrado");
      } else {
        //en caso de que el mail o user_name SEA correcto
        //aqui lo estamos haciendo con el mail
        const [user] = result;
        const hash = user.password;
        //capturo el user_id
        const user_id = user.user_id;

        //tema verificacion contraseña
        bcrypt.compare(password, hash, (error, response) => {
          if (error) return res.status(400).json(error);
          //   //si las contraseñas coinciden
          if (response === true) {
            const token = jwt.sign(
              {
                user: {
                  email: user.email,
                  name: user.name,
                  id: user_id,
                  type: user.type,
                  avatar: user.avatar,
                },
              },
              //NECESARIO ???
              process.env.SECRET,
              { expiresIn: "10d" }
            );
            res.status(200).json({ token, user: result[0] });
            //  //si las contraseñas coinciden
          } else {
            res.status(401).json("usuario y contraseña incorrectos");
          }
        });
      }
    });
  };

  // 3. trae la informacion de un usuario
  //localhost:4000/users/oneUser/:user_id
  selectOneUser = (req, res) => {
    const user_id = req.params.user_id;

    let sqlUser = `SELECT *, DATE_FORMAT(birth_date, '%Y-%m-%d') as
    birth_date, DATE_FORMAT(created_at, '%Y-%m-%d %h:%m:%s') AS created_at FROM user WHERE  user_id = ${user_id} and is_deleted = 0`;

    connection.query(sqlUser, (error, resultUser) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).json({
        resultUser,
      });
    });
  };

  //4. trae toda la informacion de todos los usuarios
  //localhost:4000/users/allUsers
  selectAllUsers = (req, res) => {
    let sql = `SELECT * from user`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
      console.log(result);
    });
  };

  //5. edita un usuario
  //localhost:4000/users/editUser/:userId
  editUser = (req, res) => {
    let user_id = req.params.user_id;

    const {
      name,
      last_name,
      email,
      password,
      phone,
      gender,
      birth_date,
      skin_tone,
      type,
    } = JSON.parse(req.body.editUser);

    // const { name, last_name, email, gender, birth_date, skin_tone, type } =
    //   req.body;

    let file = "";

    let sql = `UPDATE user SET name = "${name}", last_name = "${last_name}", email = "${email}" , gender = "${gender}" , birth_date = "${birth_date}", skin_tone = "${skin_tone}",phone = "${phone}"`;
    let final = ` WHERE user_id = ${user_id}`;

    if (req.file != undefined) {
      file = req.file.filename;

      sql += `, avatar = "${file}"`;
    }
    if (password != "") {
      bcrypt.hash(password, 8, (error, hash) => {
        if (error) throw error;

        sql += `, password = '${hash}'`;
        sql += final;

        connection.query(sql, (error, result) => {
          error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });
      });
    } else {
      connection.query(sql, (error) => {
        if (error) throw error;

        // res.status(400).json({ error })
      });
      res.status(200).json({ file });
    }
  };

  //6. eliminar un usuario de manera logica
  //localhost:4000/users/deleteUser/:userId
  deleteUser = (req, res) => {
    let user_id = req.params.user_id;
    let sql = `UPDATE user SET is_deleted = 1 WHERE user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //7. trae informacion de usuario para editar
  //localhost:4000/users/editUser/:user_id
  getEditOneUser = (req, res) => {
    let user_id = req.params.user_id;
    let sql = `SELECT * FROM user WHERE user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //.8 BUSCADOR
  browser = (req, res) => {
    let sql = `SELECT * FROM user WHERE user.type = 2 and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //.9 Muestra todos los profesionales
  allProfessional = (req, res) => {
    let sql = `SELECT * FROM user WHERE user.type = 1 and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //.10 Muestra todos los clientes
  allClients = (req, res) => {
    let sql = `SELECT * FROM user WHERE user.type = 2 and is_deleted = 0`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //11. Bloquea a un cliente
  //localhost:4000/users/blockClient
  blockClient = (req, res) => {
    let user_id = req.params.user_id;
    let sql = `UPDATE user SET is_blocked = 1 WHERE user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //12. Desbloquea a un cliente
  //localhost:4000/users/toUnlockClient
  toUnlockClient = (req, res) => {
    let user_id = req.params.user_id;
    let sql = `UPDATE user SET is_blocked = 0 WHERE user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //13.Crear un profesional
  //localhost:4000/users/createProfessional
  createProfessional = (req, res) => {
    // const { name, last_name, email, password } = JSON.parse(req.body.register);
    const { name, last_name, email, password, gender, birth_date, skin_tone } =
      req.body;

    let avatar = "";
    if (req.file != undefined) {
      avatar = req.file.filename;
    } else {
      avatar = "avatar.jpg";
    }

    let saltRounds = 8;
    bcrypt.genSalt(saltRounds, function (err, saltRounds) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        let sql = `INSERT INTO user (name,last_name,email,password,avatar,gender, birth_date, skin_tone, type,phone) VALUES ( "${name}", "${last_name}", "${email}","${hash}","${avatar}","", "${birth_date}", "", "1","")`;


        connection.query(sql, (error, result) => {
          console.log(error);
          error
            ? res.status(400).json({ error })
            : res.status(201).json(result);
        });
        enviarCorreoRegistroProfesional(
          email,
          name,
          last_name,
          "./public/images/logoCorreo/logo.png"
        );
      });
    });
  };
  //14. trae informacion de un cliente para editar
  //localhost:4000/users/editClient/:user_id
  getEditOneClient = (req, res) => {
    let user_id = req.params.user_id;
    let sql = `SELECT * FROM user WHERE user_id = "${user_id}"`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}

module.exports = new userControllers();
