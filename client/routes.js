/* global Router */

Router.configure({

	layoutTemplate: 'mainNav'
});

Router.route('/', function(){
	this.render('Home');

});

Router.map(function(){
	this.route('JournalPage', {
		path: '/JournalPage',
		data: function(){
			templateData = {
				journals: Journals.find({}, {sort: {date: -1}})
			};
			return templateData;
		}
	});
});


Router.map(function () {
  this.route('WorkoutPage', {
    path: '/Workouts',
    data: function () {
      templateData = {
        workouts: Workouts.find({}, {sort: {date: -1}}),
        sets: Sets.find({})
         };

      return templateData;
    }
  });
});

Router.map(function () {
  this.route('Diet', {
    path: '/Diet',
    data: function () {
      templateData = {
        meals: Meals.find({}, {sort: {date: -1}})
         };

      return templateData;
    }
  });
});
