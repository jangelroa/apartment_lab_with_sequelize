var models = require('./models/index');


// CREATE ONE TENANT
// models.Tenant.create({
// 	first_name: "Lola",
// 	last_name: "Flores",
// 	man_id: 1
// }).success(function(manager){
// 	console.log(manager);
// });

// CREATE MULTIPLE TENANT
models.Tenant.bulkCreate([
  {
	first_name: "Hannah",
	last_name: "Page",
	man_id: 2
  },
  {
	first_name: "Pipa",
	last_name: "Train",
	man_id: 3
  },
  {
	first_name: "John",
	last_name: "Bucanan",
	man_id: 4
  }
]).success(function(tenants) {
	console.log(tenants);
  });



