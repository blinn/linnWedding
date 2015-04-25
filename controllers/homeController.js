(function (homeController) {

	homeController.init = function(app) {
		app.get("/", function(req, res){
			res.render("index", {
  				activeClass: '.nav-home',
  				backgroundImg: 'images/temp-background.png'
			});
		});

		app.get("/events", function(req, res){
			res.render("events", {
  				activeClass: '.nav-events',
  				backgroundImg: 'images/temp-background2.png'
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
  				backgroundImg: 'images/temp-background.png'
			});
		});

	};
})(module.exports);