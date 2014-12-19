(function (rsvpController) {

	var rsvpService = require("../services/rsvpService");

	rsvpController.init = function(app) {
		
		app.post("/sendRsvp", function(req, res){
			var rsvpObj = {
				guestList: req.body.guestList,
				email: req.body.email,
				message: req.body.message,
				numberCount: req.body.numberCount
			};

			rsvpService.sendRsvp(rsvpObj, function(err){
				if(err) {
					res.sendStatus(400, err);
				} else {
					res.sendStatus(200);
				}
			});
		});
	}

})(module.exports);