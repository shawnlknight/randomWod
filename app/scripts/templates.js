Templates = {};

Templates.wod = [
	"<% _.each(wod, function(wod, index, list) { %>",

	"<article data-wodId=\"<%= wod._id %>\">",
	"<h3 class=\"wodTitle data-index=\"<%= index %>\"><%= wod.title %></h3>",
	"<div class=\"wodDescription\">",
		"<%= wod.content %>",
	"</div>",
	"<small><%= wod.date %></small>",
	"<span class=\"glyphicon glyphicon-pencil updateWod\"></span>",
	"<span class=\"glyphicon glyphicon-trash deleteWod\"></span>",
	"</article>",
	"<% }); %>"






].join("\n");

Templates.update = [
  	"<div class=\"modal-body\">",
	  	"<div class=\"form-group\">",
		    "<input type=\"text\" class=\"form-control editWodTitle\" id=\"editWodTitle\" value=\"<%= wod.title %>\">",
		  	"</div>",
			"<div class=\"form-group\">",
			"<textarea id=\"editContentForm\" class=\"form-control editContentForm\"><%= wod.content %></textarea>",
		"</div>",
  	"</div>",
  	"<div class=\"modal-footer\" data-wodId=\"<%= wod._id %>\">",
	    "<input id=\"editWodId\" type=\"hidden\" value=\"<%= wod._id %>\">",
	    "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>",
	    "<button type=\"button\" class=\"btn btn-danger submitUpdate\">Update</button>",
  	"</div>"





].join("\n");