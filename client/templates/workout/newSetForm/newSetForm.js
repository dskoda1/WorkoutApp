Session.setDefault("submittingSet", 0);


Template.newSetForm.events({


	'click #nextExercise': function(){
		event.preventDefault();

		//Close out the current exercise


		Session.set("currentExerciseId", 0);
		reps.value = '';
		weight.value= '';

	},

	'click #submitNewSet': function(event){

		event.preventDefault();
		Session.set("submittingSet", 1);

		var reps = document.getElementById("reps").value;
		var weight = document.getElementById("weight").value;
		var param = {
			reps: reps,
			weight: weight,
			eId: Session.get("currentExerciseId"),
			wId: Session.get("currentWorkoutId")

		};

		Meteor.call("addNewSet", param, function (err, data) {
        if (err) {
          console.log(err);
        }

        console.log("Set added");

      });
			Session.set("submittingSet", 0);

	}




});

Template.newSetForm.helpers({

	showSubmitSetLoadAnimation: function(){

			return Session.get("submittingSet");

	}


})
