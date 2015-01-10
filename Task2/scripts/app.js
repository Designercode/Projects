//console.log('app.js');

// Example Task List
 var TaskList = 
 {
   taskListName: 'Things To Do',
   createdBy: 'April Klein',

   tasks: 
   [
      { task: 'laundry', 
        dateCreated: '12.16.2014', 
        importance: 3,
        status: 'active' 
      },

      { task: 'wash dishes', 
        dateCreated: '12.05.2014', 
        importance: 2,
        status: 'expired' 
      },
      
      { task: 'grocery shopping', 
        dateCreated: '12.15.2014', 
        importance: 4,
        status: 'completed' 
      },
      
      { task: 'send postcard', 
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

 BlocItOff.controller('activeTasks.controller', ['$scope', function($scope) 
  {
    $scope.tasks = [];
      for (var i = 0; i<TaskList.tasks.length; i++)
      {
      $scope.tasks.push(angular.copy(TaskList.tasks[i])); 
      }  
  }]);



