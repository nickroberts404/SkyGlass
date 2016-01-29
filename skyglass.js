// skyglass.js

const request = require('request');
const api = 'http://localhost:3000'

module.exports = {
	getStars: function(options, cb){
		console.log('Getting stars...');
		if (typeof options === 'function') {
			// The options argument is really our callback
			request(api+'/stars', options)
		} else {
			request(api+'/stars'+buildQuery(options), cb);
		}
	},
	getConstellations: function(cb){
		console.log('Getting constellations...');
		request(api+'/constellations', cb);
	},
	getConstellation: function(con, cb){
		console.log('Getting constellation '+con+'...');
		request(api+'/constellations?con='+con, cb);
	},
	addConnection: function(con, connection, cb){
		console.log('Adding connection to '+con+'...');
		var body = { connection: connection, addConnection: true }
		updateConnection(con, body, cb)
	},
	removeConnection: function(con, connection, cb){
		console.log('Removing connection to '+con+'...');
		var body = { connection: connection, addConnection: false }
		updateConnection(con, body, cb)
	}
}

function updateConnection(con, body, cb){
	console.log(body);
	request({
		url: api+'/constellations?con='+con, 
		method:'PUT', 
		headers: {
	        'Content-Type': 'application/json'
    	},
		body: JSON.stringify(body)});
}

function buildQuery(options){
	var query = '?';
	for (option in options) {
		query += option+'='+options[option]+'&'
	}
	return query.substring(0, query.length - 1);
}