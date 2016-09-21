(function () {

angular.module("Portfolio")
	.controller("AboutController", AboutController)



function AboutController ($scope) {

	var self = this;

	  self.showSkills = false;
	  self.showSkillstwo = false;

		self.showEduc = false;
	  self.showEductwo = false;

     $scope.image = "http://imgur.com/eLjsIw0";

}

}())
