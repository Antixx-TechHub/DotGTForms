const transporter = require("../config/mailConfig");

exports.postContactUsForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone_number,
      msg_subject,
      country,
      companyName,
      message,
    } = req.body;

    const mailData = {
      from: email,
      to: "info@dotglobaltech.com",
      subject: `${msg_subject}`,
      html: `<p>Hello,</p> <p>You received a new application from <b>${name}</b> for the <b>${companyName} </b>position. </p>${msg_subject}<p ><b>Name :</b>${name}<br><b>Email :</b>${email}<br><b>Phone Number :</b> ${phone_number}<br><b>Country:</b> ${country}<br><b>Company Name:</b> ${companyName}<br><b>Message:</b> ${message}<br> </p><p>Best wishes,<br>Team Dot Global Technologies</p>`,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
          res.status(200).json({ message: "Email sent", info });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.postSubscribeForm = async (req, res) => {
    try {
        const { email } = req.body;
    
        const mailData = {
        from: email,
        to: "newsletter@dotglobaltech.com",
        subject: `Subscribe to Dot Global Technologies`,
        html: `<p>Hello,</p> <p>You received a new application from <b>${email}</b> to subscribe to Dot Global Technologies. </p><p>Best wishes,<br>Team Dot Global Technologies</p>`,
        };  

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(info);
                res.status(200).json({ message: "Email sent", info });
            }
            });
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
      }
};