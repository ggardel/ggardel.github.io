(function () {

angular.module("Portfolio")
	.controller("ProjectsController", ProjectsController)


ProjectsController.$inject = ['ProjectsService']


function ProjectsController (ProjectsService) {
	this.projects = ProjectsService



	
}

}())
