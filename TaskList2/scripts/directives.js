angular.module('BlocItOff.directives', [
])
	.directive('stars', function() {
	  return {
	    restrict : "E",
	    template : "<ul class='priority'>" +
	               "  <li ng-repeat='star in stars' ng-class='star'>" +
	               "    <i class='fa fa-star'></i>" + //&#9733
	               "  </li>" +
	               "</ul>",
	    scope : {
	      ratingValue : "@",
	      max : "@"
	    },
	    link : function(scope, elem, attrs) {
	      var updateStars = function() {
	        scope.stars = [];
	        for ( var i = 0; i < scope.max; i++) {
	          scope.stars.push({
	            filled : i < scope.ratingValue
	          });
	        }
	      };
	      scope.toggle = function(index) {
	        scope.ratingValue = index + 1;
	      };
	      updateStars();
	    }
  };});