var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOU GMAIL HERE',
    pass: 'YOUR PASSWORD HERE'
  }
});

var mailOptions = {
  from: 'YOUR EMAIL HERE',
  to: 'RECIPIENTS EMAIL HERE',
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