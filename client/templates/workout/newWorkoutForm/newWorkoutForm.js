Template.newWorkoutForm.events({
	
	//Creation of a new workout
	'submit .newWorkout': function(event){
		//Stop the page from default posting
		event.preventDefault();
		//Extract the name
		var text = event.target.newWorkoutTitle.value;
		//Call the server to add a new workout to the db
		Meteor.call("addNewWorkout", text, function (err, data) {
        if (err) {
          console.log(err);
        }
		
        Session.set("currentWorkoutId", data);


      });

		
	}
	
	
	
	
});


Template.newWorkoutForm.helpers({
	
	
	
	
	
	
});