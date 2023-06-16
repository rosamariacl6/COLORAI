const nodemailer = require("nodemailer");

// Configuración para el registro de usuarios normales
const transporterRegistroNormal = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: "",
  },
});

// Configuración para el registro de administradores
const transporterRegistroProfesional = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: "",
  },
});

// Función para enviar correo de registro de usuarios normales
function enviarCorreoRegistroNormal(
  email,
  name,
  last_name,
  password,
  imageFilePath
) {
  let info = transporterRegistroNormal.sendMail({
    from: "Glow Up",
    to: email, // list of receivers
    subject: "Bienvenido a Glow Up",
    html: `Hola <b>${name} ${last_name}</b>, te damos la bienvenida a <a class="nav-link" href="http://localhost:3000/">Glow Up</a>. 
      Somos el primer estudio de imagen centrado en la asesoría de imagen en España. 
      Tu contraseña aleatoria es: ${password} 
      <img src="cid:imagen@glowup.com">`,
    attachments: [
      {
        filename: "logo.png", // Nombre del archivo adjunto
        path: imageFilePath, // Ruta del archivo adjunto
        cid: "imagen@glowup.com", // ID único para referenciar la imagen en el contenido del correo
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}

// Función para enviar correo de registro de profesionales
function enviarCorreoRegistroProfesional(
  email,
  name,
  last_name,
  imageFilePath
) {
  let info = transporterRegistroProfesional.sendMail({
    from: "Glow Up",
    to: email,
    subject: "Bienvenido a Glow Up (Profesional)",
    html: `Hola <b>${name} ${last_name}</b>, te damos la bienvenida a Glow Up como Profesional. <img src="cid:imagen@glowup.com">`,
    attachments: [
      {
        filename: "logo.png", // Nombre del archivo adjunto
        path: imageFilePath, // Ruta del archivo adjunto
        cid: "imagen@glowup.com", // ID único para referenciar la imagen en el contenido del correo
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  enviarCorreoRegistroNormal,
  enviarCorreoRegistroProfesional,
};
