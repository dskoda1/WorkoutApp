Template.newSetForm.events({
	
	
	'click .finishExercise': function(){
		event.preventDefault();
		
		//Close out the current exercise
		//But save the set first
		var reps = document.getElementById('reps');
		var weight = document.getElementById('weight');
		
		
		
		var param = {
			reps: reps.value,
			weight: weight.value,
			eId: Session.get("currentExerciseId"),
			wId: Session.get("currentWorkoutId")
			
		};
		
		Meteor.call("addNewSet", param, function (err, data) {
        if (err) {
          console.log(err);
        }
		
        console.log("Set added");
		Session.set("currentExerciseId", 0);

      });
		
		
		
		reps.value = '';
		weight.value= '';
		
	},
	
	'submit .newSet': function(event){
		
		event.preventDefault();
		
		
		var param = {
			reps: event.target.reps.value,
			weight: event.target.weight.value,
			eId: Session.get("currentExerciseId"),
			wId: Session.get("currentWorkoutId")
			
		};
		
		Meteor.call("addNewSet", param, function (err, data) {
        if (err) {
          console.log(err);
        }
		
        console.log("Set added");
		
      });
		
	}
	
	
	
	
});