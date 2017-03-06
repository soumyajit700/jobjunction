var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/mail/contact_me", function(req, res) {
	var api_key = 'api:key-48d16962ee03d4b1d636e4b41398b053';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: "sandboxf2fbc0100c384c199bfd6334cc4731c2.com"});
 
var data ={
  from: 'Mailgun Sandbox <postmaster@sandboxf2fbc0100c384c199bfd6334cc4731c2.mailgun.org>',
  to: 'soumyajit kundu <soumyajitkundu700@gmail.com>',
  subject: 'Hello soumyajit',
  text: 'Hey soumyajit , you just sent an email'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
});

module.exports = router;
