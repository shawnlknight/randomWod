$(document).ready(function() {
	// DOM Items Here
	wodApp.init();

});

var wodApp = {

	init: function() {
		this.initStyling();
		this.initEvents();
	},

	initStyling: function() {
		this.renderWod();
	},

	initEvents: function() {

	},

	render: function($el, template, data) {
		var tmpl = _.template(template, data);

		$el.html(tmpl);
	},

	renderRandom: function() {

		$.ajax({
			url: '',
			type: 'GET',
			data: 'json',
			error: function(jqXHR, status, error) {
				console.log("random wod failed");
			},
			success: function(data, dataType, jqXHR) {
				
			}
		});
	},

	renderWods: function() {

		$.ajax({
			url: '',
			type: 'GET',
			data: 'json',
			error: function(jqXHR, status, error) {
				console.log("render failed");
			},
			success: function(data, dataType, jqXHR) {

			}

		});
	},

	addWod: function(e) {
		e.preventDefault();

		$.ajax({
			url: '',
			type: 'POST',
			data: ,
			dataType: 'json',
			error: function(jqXHR, status, error) {
				console.log("add wod failed");
			},
			success: function(data, dataType, jqXHR) {
				wodApp.renderWods();

			}
		});
	},

	removeWod: function() {

		$.ajax({
			url: '',
			type: 'DELETE',
			error: function(jqXHR, status, error) {
				console.log("remove wod failed");
			},
			success: function(data) {
				console.log("wod removed");
				wodApp.renderWods();
			}
		});
	},

	updateWod: function() {

		var editWod = {

		};

		$.ajax({
			url: '',
			type: editWod,
			error: function(jqXHR, status, error) {
				console.log("update wod failed");
			},
			success: function(data, dataType, jqXHR) {
				console.log("update successful");
				wodApp.renderWods();
			}
		});
	},

	renderFormDetail: function() {

		$.ajax({
			url: '',
			type: 'GET',
			dataType: 'json',
			error: function(jqXHR, status, error) {
				console.log("render form failed");
			},
			success: function(data, dataType, jqXHR) {

				wodApp.render();
			}
		});

	},



























































































































































































};