var nodemailer = require('nodemailer');

const { EMAIL, APP_PASSWORD, EMAIL_TO } = process.env;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD
  }
});

var mailOptions = {
  from: EMAIL,
  to: EMAIL_TO,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});