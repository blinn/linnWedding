(function (homeController) {

	var rsvpService = require("../services/rsvpService");

	homeController.init = function(app) {
		app.get("/", function(req, res){
			res.render("index", {
  				activeClass: '.nav-home'
			});
		});

		app.get("/events", function(req, res){
			res.render("events", {
  				activeClass: '.nav-events'
			});
		});

		app.get("/rsvp", function(req, res){
			
			rsvpService.sendRsvp();
			 res.render("rsvp", {
  			 			activeClass: '.nav-rsvp'
			 });
		});

		app.get("/portfolio1", function(req, res){
			res.render("portfolio1", {
  				activeClass: '.nav-portfolio, .nav-portfolio-1'
			});
		});

		app.get("/portfolio2", function(req, res){
			res.render("portfolio2", {
  				activeClass: '.nav-portfolio, .nav-portfolio-2'
			});
		});
	};
})(module.exports);