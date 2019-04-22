const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const endpointEmail = ''; // the email address you want emails sent to goes here

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // or whatever other sender to use
  provider: 'gmail', // ditto
  port: 465,
  secure: true,
  auth: {
    user: endpointEmail,
    pass: '' // password for the email address
  },
  tls: {
    rejectUnauthroized: false
  },
  disableFileAccess: true
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mailOptions = {
    to: [endpointEmail],
    from: name,
    subject: 'Email sent from <portfolio site> contact form', // <portfolio site> can be replaced with something nicer looking
    text: message,
    replyTo: email
  };

  if (name === '' || email === '' || message === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ' + response);
      res.end('sent');
    }
  });
});

app.listen(port, () => {
  console.log('Express started on port ' + port);
});
