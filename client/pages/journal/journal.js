Template.JournalPage.events({
    
    "submit .new-journal": function(event) {
          event.preventDefault();
          alert("in the right event");
          
          //Get the value of the journal
          var text = event.target.journalText.value;
          
          
          // Meteor.call("addEntry", text);
          // 
          // event.target.journalText.value = "";
        
      }
    
  });