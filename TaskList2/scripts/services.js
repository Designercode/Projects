angular.module('BlocItOff.services', [
])
  .factory('Tasks', function() {
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

		 return {
		   addTask: function(task){
		   	 TaskList.tasks.push(task);
		   },
		   getTasks: function(){
		   	 return TaskList.tasks;
		   }
		 }
  })
;
