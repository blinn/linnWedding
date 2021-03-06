(function (homeController) {

	homeController.init = function(app) {
		app.get("/", function(req, res){
			res.render("index", {
  				activeClass: '.nav-home',
  				backgroundImg: 'images/7.jpg'
			});
		});

		app.get("/story", function(req, res){
			res.render("story", {
  				activeClass: '.nav-story',
  				backgroundImg: ''
			});
		});

		app.get("/events", function(req, res){
			res.render("events", {
  				activeClass: '.nav-events',
  				backgroundImg: 'images/20.jpg'
			});
		});

		app.get("/accomodations", function(req, res){
			res.render("accomodations", {
  				activeClass: '.nav-accomodations',
  				backgroundImg: 'images/gallery/K.jpg'
			});
		});

		app.get("/gallery", function(req, res){
			res.render("gallery", {
  				activeClass: '.nav-gallery',
  				backgroundImg: ''
			});
		});

		app.get("/rsvp", function(req, res){
			 res.render("rsvp", {
  			 	activeClass: '.nav-rsvp',
  				backgroundImg: 'images/gallery/H2.jpg'
			 });
		});

		//Story flip cards
		app.get("/story/1", function(req, res){
			 res.render("story-1", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});

		app.get("/story/2", function(req, res){
			 res.render("story-2", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});

		app.get("/story/3", function(req, res){
			 res.render("story-3", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});

		app.get("/story/4", function(req, res){
			 res.render("story-4", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});

		app.get("/error", function(req, res){
			 res.render("error", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});

		app.get("/thankyou", function(req, res){
			 res.render("thank you", {
  			 	activeClass: '',
  				backgroundImg: ''
			 });
		});



		

		

	};
})(module.exports);