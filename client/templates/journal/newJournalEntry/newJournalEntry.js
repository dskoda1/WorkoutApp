Template.newJournalEntry.events({


  "submit #newJournal": function(event) {
        event.preventDefault();

        //Get the value of the journal
        var text = event.target.journalText.value;

        Meteor.call("addJournal", text);

        event.target.journalText.value = "";

    }

})
