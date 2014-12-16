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
         url: '/' || '/activeTasks',
         controller: 'activeTasks.controller',
         templateUrl: 'app/assets/templates/activeTasks.html'
      });

      $stateProvider.state('taskHistory', 
      {
         url: '/taskHistory',
         controller: 'taskHistory.controller',
         templateUrl: 'app/assets/templates/taskHistory.html'
      });
   }]);

 BlocItOff.controller('activeTasks.controller', ['$scope', function($scope) 
  {
    $scope.subText = "Testing,1,2,3";
  }]);