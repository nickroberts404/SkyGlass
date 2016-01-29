// skyglass.js

const request = require('request');

module.exports = {
	getStars: function(options, cb){
		console.log('Getting stars...');
		if (typeof options === 'function'){
			console.log('Callback is options');
		}
	},
	getConstellations: function(cb){
		console.log('Getting constellations...');
	},
	getConstellation: function(con, cb){
		console.log('Getting constellation '+con+'...');
	},
	addConnection: function(con, connection, cb){
		console.log('Adding connection to '+con+'...');
	},
	removeConnection: function(con, connection, cb){
		console.log('Removing connection to '+con+'...');
	}

}