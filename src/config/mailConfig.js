
const nodemailer = require("nodemailer");

 const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.office365.com",
    auth: {
      user: "careers@dotglobaltech.com",
      pass: "2]6!NK{lo3SJ",
    },
    secure: true,
    tls: { rejectUnauthorized: false },
    debug: true
});


module.exports = transporter;