(function () {

var app = angular.module("Portfolio", ['ui.router', 'ngAnimate','ngSanitize'])

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/welcome')

	$stateProvider
		.state('about', {
			url: '/about',
			controller: 'AboutController as about',
			templateUrl: '/partials/about.html'
		})
		.state("projects", {
			url: "/projects",
			controller: "ProjectsController as projects",
			templateUrl: '/partials/projects.html'
		})
		.state("welcome", {
			url: '/welcome',
			controller: "WelcomeController as welcome",
			templateUrl: '/partials/welcome.html'
		})
    .state("contact", {
      url:'/contact',
      controller: "ContactController as contact",
      templateUrl: '/partials/contact.html'
    })

})

}())
