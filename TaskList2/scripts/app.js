//console.log('app.js');

// Example Task List
 var TaskList = 
 {
   taskListName: 'Things To Do',
   createdBy: 'April Klein',

   tasks: 
   [
      { taskName: 'laundry', 
        dateCreated: '12.16.2014', 
        importance: 3,
        status: 'active'
      },

      { taskName: 'wash dishes', 
        dateCreated: '12.05.2014', 
        importance: 2,
        status: 'expired'
      },
      
      { taskName: 'grocery shopping', 
        dateCreated: '12.15.2014', 
        importance: 4,
        status: 'completed'
      },
      
      { taskName: 'send postcard', 
        dateCreated: '12.10.2014', 
        importance: 3,
        status: 'active'
      },    
   ]
 };

 BlocItOff = angular.module('BlocItOff', ['ui.router']);
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

 BlocItOff.controller('activeTasks.controller', ['$scope', function($scope) 
  {
    $scope.tasks = [];
      for (var i = 0; i<TaskList.tasks.length; i++)
      {
        $scope.tasks.push(angular.copy(TaskList.tasks[i])); 
      }


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
      
     if(currentStar === "star1")
        {
          document.getElementById("star1").className = "fa fa-star";
          document.getElementById("star2").className = "fa fa-star-o";
          document.getElementById("star3").className = "fa fa-star-o";
          document.getElementById("star4").className = "fa fa-star-o";
          document.getElementById("star5").className = "fa fa-star-o";
        }

     else if(currentStar === "star2")
        {
          document.getElementById("star1").className = "fa fa-star";
          document.getElementById("star2").className = "fa fa-star";
          document.getElementById("star3").className = "fa fa-star-o";
          document.getElementById("star4").className = "fa fa-star-o";
          document.getElementById("star5").className = "fa fa-star-o";
        }

     else if(currentStar === "star3")
        {
          document.getElementById("star1").className = "fa fa-star";
          document.getElementById("star2").className = "fa fa-star";
          document.getElementById("star3").className = "fa fa-star";
          document.getElementById("star4").className = "fa fa-star-o";
          document.getElementById("star5").className = "fa fa-star-o";
        }

     else if(currentStar === "star4")
        {
          document.getElementById("star1").className = "fa fa-star";
          document.getElementById("star2").className = "fa fa-star";
          document.getElementById("star3").className = "fa fa-star";
          document.getElementById("star4").className = "fa fa-star";
          document.getElementById("star5").className = "fa fa-star-o";
        }

    else if(currentStar === "star5")
        {
          document.getElementById("star1").className = "fa fa-star";
          document.getElementById("star2").className = "fa fa-star";
          document.getElementById("star3").className = "fa fa-star";
          document.getElementById("star4").className = "fa fa-star";
          document.getElementById("star5").className = "fa fa-star";
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
    $scope.addTask = function()
    {
    $scope.tasks.push({taskName:$scope.enterTaskName, importance: Imp, status: "active"});
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

  }]);


   
























