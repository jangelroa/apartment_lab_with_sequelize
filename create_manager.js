var models = require('./models/index');

// CREATE ONE MANAGERS
models.Manager.create({
	first_name: "Pepe",
	last_name: "Dela Barrosa",
	property: "222 A st, SF"
}).success(function(manager){
	console.log(manager);
});


// CREATE MULTIPLE MANAGERS
models.Manager.bulkCreate([
  {
	first_name: "Papa",
	last_name: "Papa",
	property:  "333 B st, SF"
  },
  {
	first_name: "Pepe",
	last_name: "Pepe",
	property:  "444 C st, SF"
  },
  {
	first_name: "Pipi",
	last_name: "Pipi",
	property:  "555 D st, SF"
  }
]).success(function(managers) {
	console.log(managers);
  });
