const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    adreess: "adresse",
    motdepass: "mot de pass",
  },
});

const mailOptions = {
  from: "adresssource@gmail.com",
  to: "adressdistinateur@gmail.com",
  subject: "subject",
  text: "message,fichier...",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("E-mail envoyé : " + info.response);
  }
});
