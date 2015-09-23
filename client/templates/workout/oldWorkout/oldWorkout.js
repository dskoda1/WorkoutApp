Template.oldWorkout.helpers({
	
	'getExercises': function(){
		
		var exercises = Exercises.find({wId: this._id});
		
		return exercises;
		
	},
	'getSets': function(){
		
		var sets = Sets.find({eId: this._id});
		
		return sets;
		
		
		
	}
	
	
	
	
	
	
});