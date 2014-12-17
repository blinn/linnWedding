(function (rsvpService) {

	var nodemailer = require("nodemailer");

	rsvpService.sendRsvp = function() {
		
		// create reusable transport method (opens pool of SMTP connections)
		var smtpTransport = nodemailer.createTransport("SMTP",{
			service: "Gmail",
			auth: {
				user: "linnwedding15@gmail.com",
				pass: "LinnWedding101715"
			}
		});

		// setup e-mail data with unicode symbols
		var mailOptions = {
			from: "brettlinn@gmail.com", // sender address
			to: "br3ttlinn@gmail.com", // list of receivers
			subject: "Hello", // Subject line
			text: "Hello world", // plaintext body
			html: "<b>Hello world</b>" // html body
		}

		// send mail with defined transport object
		smtpTransport.sendMail(mailOptions, function(error, response){
			if(error){
				console.log("Error to follow--->" + error);
				res.contentType('json');
				res.writeHead(500, { 'Content-Type': 'application/json'});
				res.write(JSON.stringify({ success: false, message: error }));
				res.end();
			}else{
				console.log("Message sent: " + response.message);
			}

			// if you don't want to use this transport object anymore, uncomment following line
			//smtpTransport.close(); // shut down the connection pool, no more messages
		});
	}

})(module.exports);