Package.describe({
	summary: "Pikaday JavaScript Datepicker for Meteor — lightweight, no dependencies, modular CSS",
  	version: "1.0.0",
  	git: "https://github.com/richsilv/Pikaday.git"
});

Package.on_use(function (api) {
 	api.versionsFrom("METEOR@0.9.1");
	api.use('jquery', 'client');
	api.use('momentjs:moment@2.9.0', 'client');	

	api.add_files('client/pikaday.css', 'client');
	api.add_files([
		'client/pikaday.js',
		'client/export-pikaday.js'
		], 'client');

  	api.export('Pikaday', 'client');
});
