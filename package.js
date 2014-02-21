Package.describe({
	summary: "Pikaday JavaScript Datepicker for Meteor — lightweight, no dependencies, modular CSS"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.add_files('client/pikaday.css', 'client');
	api.add_files('client/pikaday.js', 'client');

  	api.export('Pikaday', 'client');
});