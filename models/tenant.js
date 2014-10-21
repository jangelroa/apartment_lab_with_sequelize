"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tenant = sequelize.define("Tenant", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    man_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Tenant;
};
