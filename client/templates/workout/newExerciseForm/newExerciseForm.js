Template.newExerciseForm.events({

	'submit .newExercise': function(event){

		//Stop the page from default posting
		event.preventDefault();
		//Extract the name
		var text = event.target.newExerciseTitle.value;
		//Call the server to add a new workout to the db
		var wId = Session.get("currentWorkoutId");
		var param = {
			text: text,
			wId: wId
		};
		Meteor.call("addNewExercise", param, function (err, data) {
        if (err) {
          console.log(err);
        }

        Session.set("currentExerciseId", data);


      });



	},






});

Template.newExerciseForm.helpers({







});
