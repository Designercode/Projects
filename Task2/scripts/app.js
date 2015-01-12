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


    // Controlling Priority Icons

    $scope.fillStar = function(timesClicked)
    {
      if((timesClicked %2) !== 0) //Odd Number of Clicks
      {
        console.log('true');
        return true;
      }
      
      else if((timesClicked %2) === 0) //Even Number of Clicks
      {
        console.log('false');
        return false;
      }
    } 

   $scope.starClass = function(fillStar)
    {
      console.log(fillStar);
      if(fillStar === true)
      {
        console.log('star');
        return "fa-star";
      }

      else if(fillStar !== true)
      {
        console.log('outline');
        return "fa-star-o";
      }          
    }

    //Adds New Task to TaskList on Form Submit
    $scope.addTask = function()
    {
    $scope.tasks.push({taskName:$scope.enterTaskName, status: "active"});
    }

  }]);
























