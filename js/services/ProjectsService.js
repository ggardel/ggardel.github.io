(function () {

angular.module("Portfolio")
	.factory("ProjectsService", ProjectsService)

function ProjectsService () {
	 var factory = [
		  {title: "INCLUSION.COM",
			description: "    Social Network to facilitate socialization and inclusion of mental disabled people in someone's circle of friends. Offering donation and volunteer opportunities.\n\n    Built in a 1 week sprint with MEAN stack, HTML5, CSS3, Javascript, jQuery and Bootstrap.",
			link: "https://inclusion-com.herokuapp.com/#/login",
			sample: "http://i.imgur.com/f3r4YoV.png"},
			{title: "DOCTOR-CLIENT PORTAL",
			description: "   Portal where the user (client) would have access to (read) his own information (only) and the Administrator (Doctor or Nurse) would have access to all clients information (C.R.U.D.) To try as administrator (login as doctor@doctor and password doctor). \n\n    Built in 1 week sprint using Ruby on Rails, PostgreSQL, Devise, HTML5, CSS3 and Bootstrap.",
			link: "http://doctor-client-portal.herokuapp.com/users/sign_in",
			sample: "http://i.imgur.com/L14Cn9s.png"},
			{title: "NADOPeT",
			description: "   National Database for Pet Adoption - A database for locating humane societies and pet shelters across the nation. \n\n    We noticed that individual humane society websites tend to be outdated and hard to navigate. As non-profit organizations, humane societies cannot afford to hire a web developer to maintain and update their websites. Therefore, we decided to create a website/database that humane societies could use to post their contact information and, most importantly, their adoptable pets. \n\n    This project was built in a 1 week sprint as a team of 3 developers. We made a MEN stack app that incorporated Google's OAuth, Google Maps and Imgur.",
			link: "http://nadopet.herokuapp.com/",
			sample: "http://i.imgur.com/TOPqZNQ.png"},
			{title: "REARRANGE  Puzzle",
			description: "   It is a game to think, where the player have to Rearrange the initial configuration  the tiles to match the goal configuration also have a timer and in the end will show how many moves and time the player neede until the end Programed to be always iniciated with a solvable combination. \n\n    Built in a 1week sprint using JavaScript, JQuery, HTML5, CSS3 and Bootstrap.",
			link: "https://ggardel.github.io/WDI-11---Project-01--Game/Rearrange_Puzzle_Game/",
			sample: "http://i.imgur.com/7RCxopv.png"}
		];

	return factory
}


}())
