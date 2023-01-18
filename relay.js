const rpcClient = require("./client");
// import nodeMailer from "nodeMailer";
const nodeMailer = require("nodemailer");

async function relay(index, params) {
  switch (index) {
    case "SEND_EMAIL": {
      console.log("index in send email:", index);
      console.log("params in send email:", params);
      const from = params.from;
      const email = params.email;
      const html = params.html;
      const task = params.task;
      const subject = params.subject;

      let transporter = nodeMailer.createTransport({
        name: "https://noon-vid.com/",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "kaycee.keebler68@ethereal.email", // generated ethereal user
          pass: "ZAdVDerpp2VgAFgkmz", // generated ethereal password
        },
      });

      switch (task) {
        case "send-welcome-email": {
          try {
            let info = await transporter.sendMail({
              from: "info@noon-vid.com",
              to: email, // list of receivers
              subject: "Registration done", // Subject line
              html,
            });

            console.log("send email info:", info);
          } catch (e) {
            console.log("error:", e);
          }

          return null;
        }
        default: {
          return null;
        }
      }

      return null;
    }

    default: {
      return null;
    }
  }
}

module.exports = relay;
