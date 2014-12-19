(function (rsvpService) {

	var nodemailer = require("nodemailer");

	rsvpService.sendRsvp = function(rsvpObj, next) {
		 
		 var smtpTransport = nodemailer.createTransport("SMTP",{
		 	service: "Gmail",
		 	auth: {
		 		user: "linnwedding15@gmail.com",
		 		pass: "LinnWedding101715"
		 	}
		 });

		 var mailOptions = {
		 	from: "linnwedding15@gmail.com", // sender address
		 	to: "br3ttlinn@gmail.com", // list of receivers
		 	subject: "Someone has RSVP'd", // Subject line
		 	html: rsvpObj.guestList + " has responded! <br/>"+
		 	"<b>Respond to them at " + rsvpObj.email +"</b><br/> They also left a note: " + rsvpObj.message // html body
		 };

		 //send mail with defined transport object
		 smtpTransport.sendMail(mailOptions, function(error, response){
		 	if(error){
		 		console.log("Error to follow--->" + error);
		 		res.contentType('json');
		 		res.writeHead(500, { 'Content-Type': 'application/json'});
		 		res.write(JSON.stringify({ success: false, message: error }));
		 		res.end();
		 		next(error);
		 	} else{
		 		console.log("Message sent: " + response.message);
		 		next();
		 	}

		 	// if you don't want to use this transport object anymore, uncomment following line
		 	//smtpTransport.close(); // shut down the connection pool, no more messages
		});
	}
})(module.exports);