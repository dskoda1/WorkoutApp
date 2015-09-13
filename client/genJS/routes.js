/* global Router */

Router.configure({
	
	layoutTemplate: 'mainNav'
});

Router.route('/', function(){
	this.render('firstPage');
	this.layout('mainNav');
});

Router.route('/JournalPage', function(){
	this.render('JournalPage');
	this.layout('mainNav');
});