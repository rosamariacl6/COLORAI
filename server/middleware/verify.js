const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  // console.log("esttooooyy en verifyyyy")
  // console.log("estooo eesss ellll reqqqqq", req);

  console.log("headersssss", req.headers);
  const header = req.headers.authorization;
  //Si no hay header, error no e
  if (!header) {
    return res.status(401).json("Token no encontrado");
  }

  //   Bearer token cortamelo por el espacio
  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).json("Token no valido");
  }
  //metodo de la libreria que le pasa el token que firma
  //en nuestro ENV que coincide con Secret
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(401).json(error);
    }
    next();
  });
};

module.exports = verify;
