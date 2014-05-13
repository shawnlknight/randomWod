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
		this.renderWods();
	},

	initEvents: function() {

		// Add WOD
		$(".newWodForm").on("click", "#submitButton", this.addWod);

		// Delete WOD
		$(".wodList").on("click", ".deleteWod", this.removeWod);

		// Edit WOD
		$(".wodList").on("click", ".updateWod", function(e) {
			e.preventDefault();
			var wodId = $(this).closest("article").data("wodid");
			wodApp.renderModal(wodId);
			$("#editWodModal").modal();
		});
		$("#editWodModal").on("click", ".submitUpdate", function(e) {
			var wodId = $("#editWodId").val();
			wodApp.updateWod(wodId);
		});

		// Generate Random WOD
		$("#randomButton").on("click", this.renderRandom);

	},

	render: function($el, template, data) {
		var tmpl = _.template(template, data);

		$el.html(tmpl);
	},

	renderWods: function() {

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod",
			type: "GET",
			data: "json",
			error: function(jqXHR, status, error) {
				console.log("render failed");
			},
			success: function(data, dataType, jqXHR) {

				var wod = window.wod = data;
				wodApp.render($(".wodList"), Templates.wod, wod);

			}

		});
	},

	renderRandom: function(e) {
		e.preventDefault();

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod",
			type: "GET",
			data: "json",
			error: function(jqXHR, status, error) {
				console.log("random wod failed");
			},
			success: function(data, dataType, jqXHR) {

			var randomizer = _.random(0, data.length);
			// var randomizer = Math.floor(Math.random()*data.length);
			var workout = window.wod = data[randomizer];
			console.log(workout);

    		wodApp.render($(".randomWod"), Templates.random, workout);			

			}
		});
	},

	addWod: function(e) {
		e.preventDefault();

		var newWodObj = {
			title: $("#newWodTitle").val(),
			date: new Date(),
			content: $("#wodContent").val().replace(/\r\n|\r|\n/g,"<br />")
		};

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod",
			type: "POST",
			data: newWodObj,
			dataType: "json",
			error: function(jqXHR, status, error) {
				console.log("add wod failed");
			},
			success: function(data, dataType, jqXHR) {
				$("#newWodTitle").val("");
				$("#wodContent").val("");
				wodApp.renderWods();

			}
		});
	},

	removeWod: function() {
		var $thisWod = $(this).closest("article");
	    var wodId = $thisWod.data("wodid");

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod/" + wodId,
			type: "DELETE",
			error: function(jqXHR, status, error) {
				console.log("remove wod failed");
			},
			success: function(data) {
				console.log("wod removed");
				wodApp.renderWods();
			}
		});
	},

	updateWod: function(wodId) {

		var editWod = {
			title: $(".editWodTitle").val(),
			date: new Date(),
			content: $(".editContentForm").val().replace(/\r\n|\r|\n/g,"<br />")
		};

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod/" + wodId,
			type: "PUT",
			data: editWod,
			error: function(jqXHR, status, error) {
				console.log("update wod failed");
			},
			success: function(data, dataType, jqXHR) {
				console.log("update successful");
				$("#editWodModal").modal("hide");
				wodApp.renderWods();
			}
		});
	},

	renderModal: function(wodId) {

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/randomWod/" + wodId,
			type: "GET",
			dataType: "json",
			error: function(jqXHR, status, error) {
				console.log("render form failed");
			},
			success: function(data, dataType, jqXHR) {

  				var wod = window.wod = data;
	  			wodApp.render($("#editWodForm"),Templates.update, wod);
			}
		});

	}



























































































































































































};