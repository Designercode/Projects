BlocItOff = angular.module('BlocItOff', [
  'ui.router',
  'BlocItOff.services',
  'BlocItOff.directives'
]);

 BlocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) 
   {
      $locationProvider.html5Mode(true);

      $stateProvider.state('activeTasks', 
      {
         url: '/',
         controller: 'activeTasks.controller',
         templateUrl: 'templates/activeTasks.html'
      });

      $stateProvider.state('taskHistory', 
      {
         url: '/taskHistory',
         controller: 'taskHistory.controller',
         templateUrl: 'templates/taskHistory.html'
      });
   }]);

// Populates Task List with Given Object Array

 BlocItOff.controller('activeTasks.controller', function($scope, Tasks) 
  {
    $scope.tasks = Tasks.getTasks();


    // Controlling Priority Icons by Toggle on Click: Step 1 retrieve element id.
    var currentStar = null;
    var Imp = null;
    var newStatus = null;
    
    $scope.fillStar = function(event)
    {
      currentStar = event.target.id;
    } 

   
   // using the id of the star to determine which icon state is activated
   $scope.starClass = function()
    {
     var star1 = document.getElementById("star1");
     var star2 = document.getElementById("star2");
     var star3 = document.getElementById("star3");
     var star4 = document.getElementById("star4");
     var star5 = document.getElementById("star5");

      if(currentStar === "star1") {
        star1.className = "fa fa-star";
        star2.className = "fa fa-star-o";
        star3.className = "fa fa-star-o";
        star4.className = "fa fa-star-o";
        star5.className = "fa fa-star-o";
      }

     else if(currentStar === "star2")
        {
          star1.className = "fa fa-star";
          star2.className = "fa fa-star";
          star3.className = "fa fa-star-o";
          star4.className = "fa fa-star-o";
          star5.className = "fa fa-star-o";
        }

     else if(currentStar === "star3")
        {
          star1.className = "fa fa-star";
          star2.className = "fa fa-star";
          star3.className = "fa fa-star";
          star4.className = "fa fa-star-o";
          star5.className = "fa fa-star-o";
        }

     else if(currentStar === "star4")
        {
          star1.className = "fa fa-star";
          star2.className = "fa fa-star";
          star3.className = "fa fa-star";
          star4.className = "fa fa-star";
          star5.className = "fa fa-star-o";
        }

    else if(currentStar === "star5")
        {
          star1.className = "fa fa-star";
          star2.className = "fa fa-star";
          star3.className = "fa fa-star";
          star4.className = "fa fa-star";
          star5.className = "fa fa-star";
        }

    else
        {
          return "fa-star-o";
        }

    // records which stars have been activated by setting the "importance number"
    if (document.getElementById(currentStar).className = "fa fa-star");
        {
          Imp = currentStar.replace( /[^\d.]/g, '' ); // This works: "importance" is later set to the number found within the star id. 
        }

    }

    // controlling task status -> add 7-day expiration function in here later
    $scope.getTaskStatus = function(event)
    {
      if (document.getElementById("check").checked === true)
      {
        newStatus = "completed";
      } 

      else if (document.getElementById("check").checked === false)
      {
        newStatus = "active";
      }
    }


    // ! Push new status to exisiting Task... How to access & update pre-existing tasks?


    // Adds New Task to TaskList on Form Submit
    $scope.addTask = function() {
      var task = {
        taskName: $scope.enterTaskName, 
        importance: Imp, 
        status: "active"
      }

      Tasks.addTask(task);
    }


     // ! Populate stars (on created tasks) depending on the importance: number... How to access the "importance" property in Tasks.tasks[i]?
    // Naturally, I would have prefered to re-use the if statements above, but couldn't think of a way to do it...
    
    // I know the code below is wrong, but I wanted to show the concept...

    /*
        $scope.populateTaskStars = function()
        {
            switch($scope.task.importance) 
            {

                              case 1:
                                      document.getElementById("imp1").className = "fa fa-star";
                                      document.getElementById("imp2").className = "fa fa-star-o";
                                      document.getElementById("imp3").className = "fa fa-star-o";
                                      document.getElementById("imp4").className = "fa fa-star-o";
                                      document.getElementById("imp5").className = "fa fa-star-o";
                                      break;
                              case 2:
                                      code block...
                                      break;
                              case 3:
                                      code block...
                                      break;
                              case 4:
                                      code block...
                                      break;
                              case 5:
                                      code block...
                                      break;        
                              default:
                                      default return "fa-star-o";

            }
          }
    */

    // control which tasks are shown on the active page

/*
    $.scope.hidden = function()
    {
      if (task.status !== "active")
      {
        return true;
      }
    }

*/

  });


   
























