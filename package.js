Package.describe({
	"summary": "Pikaday JavaScript Datepicker for Meteor — lightweight, no dependencies, modular CSS",
	"version": "0.1.1",
  	"git": "https://github.com/richsilv/Pikaday.git",
  	"name": "richsilv:pikaday"
});

Package.on_use(function (api) {
	api.versionsFrom(METEOR-CORE@0.9.0);
	api.use('jquery', 'client');
	api.use('mrt:moment@2.8.1', 'client');	

	var path = Npm.require('path');
	api.add_files('client/pikaday.css', 'client');
	api.add_files([
		'client/pikaday.js',
		'client/export-pikaday.js'
		], 'client');

  	api.export('Pikaday', 'client');
});