// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// calling the orm functions
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, val, cb) {
        console.log("cols: "+cols)
        console.log("val: "+val)
      orm.insertOne("burgers", cols, val, function(res) {
          console.log(cols)
          console.log(val)
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
       
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };


// Export the database functions for the controller (catsController.js).
module.exports = burger;