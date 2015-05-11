(function (rsvpController) {

	var rsvpService = require("../services/rsvpService");

	rsvpController.init = function(app) {
		
		app.post("/sendRsvp", function(req, res){
			var rsvpObj = {
				attendingStatus: req.body.attendingStatus,
				guestList: req.body.guestList,
				guestNum: req.body.guestNum,
				email: req.body.email,
				message: req.body.message
			};

			rsvpService.sendRsvp(rsvpObj, function(err){
				if(err) {
					res.render("error", {
		  				activeClass: '',
		  				backgroundImg: ''
					});
				} else {
					res.render("thankyou", {
		  				activeClass: '',
		  				backgroundImg: ''
					});
				}
			});
		});
	}

})(module.exports);