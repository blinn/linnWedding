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
		 	to: "br3ttlinn@gmail.com, caseynesius@gmail.com", // list of receivers
		 	subject: "Someone has RSVP'd", // Subject line
		 	html: createBody()
		 };

		 function createBody(){
		 	var bodyString = rsvpObj.guestList + " has responded with the following status: <br/>";
		 	
		 	if(rsvpObj.attendingStatus === "Yes"){ 
		 		bodyString = bodyString + "<b>Yes we will be in attendance</b> and have rsvp'd for "+ rsvpObj.guestNum + " attendees.<br/>";
		 		bodyString = bodyString + "<b>Respond to them at " + rsvpObj.email +"</b><br/> ";
		 		if(rsvpObj.message != "") {
		 			bodyString = bodyString + "<br/>They have included the following message with their reponse: <br/>" + rsvpObj.message;
		 		}
		 	} else {
		 		bodyString = bodyString + "<b>No we will not be able to make it</b><br/>";
		 		if(rsvpObj.message != "") {
		 			bodyString = bodyString + "<br/>They have included the following message with their reponse: <br/>" + rsvpObj.message;
		 		}

		 	}

		 	return bodyString;
		 }

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