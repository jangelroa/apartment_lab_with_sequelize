var express = require("express");
var pg = require("pg");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var models = require("./models/index.js");
var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(methodOverride("_method"));


/*************************************************************************************/



app.get("/", function(req,res){
	//console.log("GET / ", req.body);
	models.Manager.findAll().success(function(managers){
		res.render("index.ejs", {
			all_managers: managers
		});
	});
});


app.post("/", function(req, res){
	// console.log("POST / ", req.body.man_first_name, req.body.man_last_name, req.body.prop_address);
	models.Manager.create({first_name: req.body.man_first_name, last_name: req.body.man_last_name, property: req.body.prop_address })
	.success(function(data){
		res.redirect("/");
	});
});

app.get("/tenants/:manager_id", function(req,res){
	models.Tenant.findAll({where: {man_id: req.params.manager_id}}).success(function(tenants){
		models.Manager.find(req.params.manager_id).success(function(one_manager){
			//console.log(one_manager);
			res.render("tenants.ejs", {
				all_tenants: tenants,
				property: one_manager.property
			});
		});
		
	});
});

app.post("/tenants/:manager_id", function(req, res){											// CHANGE THIS LATER
	//console.log("POST /tenants/:manager_id ", req.body.ten_first_name, req.body.ten_last_name, req.params.manager_id);
	models.Tenant.create({first_name: req.body.ten_first_name, last_name: req.body.ten_last_name, man_id: req.params.man_id })
	.success(function(data){
		res.redirect("/tenants/" + req.params.manager_id);
	});
});


/*************************************************************************************/


app.listen(3000);






