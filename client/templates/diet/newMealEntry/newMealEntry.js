Template.newMealEntry.events({


  "submit #newMeal": function(event) {
        event.preventDefault();

        //Get the value of the journal
        var text = event.target.mealText.value;

        Meteor.call("addMeal", text);

        event.target.mealText.value = "";

    }




})
