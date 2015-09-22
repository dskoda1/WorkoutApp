/* global Router */

Router.configure({
	
	layoutTemplate: 'mainNav'
});

Router.route('/', function(){
	this.render('Home');
	
});

Router.route('/JournalPage', function(){
	this.render('JournalPage');
	
});

// Router.route('/Workouts', function(){
// 	this.render('WorkoutPage');
// 	
// });

Router.map(function () {
  this.route('WorkoutPage', {
    path: '/Workouts',
    data: function () {
      templateData = { 
        workouts: Workouts.find({}),    
        sets: Sets.find({})
         };

      return templateData;
    }
  });
});