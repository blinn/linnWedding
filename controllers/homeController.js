(function (homeController) {

	homeController.init = function(app) {
		app.get("/", function(req, res){
			res.render("index", {
  				activeClass: '.nav-home',
  				backgroundImg: 'images/7.jpg'
			});
		});

		app.get("/events", function(req, res){
			res.render("events", {
  				activeClass: '.nav-events',
  				backgroundImg: 'images/20at75.jpg'
			});
		});

		app.get("/rsvp", function(req, res){
			 res.render("rsvp", {
  			 	activeClass: '.nav-rsvp',
  				backgroundImg: 'images/temp-background3.png'
			 });
		});

		app.get("/proposal", function(req, res){
			res.render("proposal", {
  				activeClass: '.nav-proposal',
  				backgroundImg: 'images/20at75.jpg'
			});
		});

	};
})(module.exports);