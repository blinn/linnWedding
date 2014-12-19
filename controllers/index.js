(function (controllers) {

	var homeController = require("./homeController");
	var rsvpController = require("./rsvpController")
	
	controllers.init = function (app) {
		homeController.init(app);
		rsvpController.init(app);
	};
})(module.exports);