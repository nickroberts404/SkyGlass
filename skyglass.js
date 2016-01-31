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
	addToConstellation: function(stars, cb){
		console.log('Adding stars to their constellations...');
		var body = { stars: stars, add_stars: true };
		var url = api+'/constellations'
		makePutRequest(url, body, cb);
	},
	removeFromConstellation: function(stars, cb){
		console.log('Removing stars from their constellations...');
		var body = { stars: stars, add_stars: false };
		var url = api+'/constellations'
		makePutRequest(url, body, cb);
	},
	addConnection: function(con, connection, cb){
		console.log('Adding connection to '+con+'...');
		var body = { connection: connection, addConnection: true }
		var url = api+'/constellations?con='+con
		makePutRequest(url, body, cb)
	},
	removeConnection: function(con, connection, cb){
		console.log('Removing connection to '+con+'...');
		var body = { connection: connection, addConnection: false }
		var url = api+'/constellations?con='+con
		makePutRequest(url, body, cb)
	}
}

function makePutRequest(url, body, cb){
	request({
		url: url, 
		method:'PUT', 
		headers: {
	        'Content-Type': 'application/json'
    	},
		body: JSON.stringify(body)}, cb);
}

function buildQuery(options){
	var query = '?';
	for (option in options) {
		query += option+'='+options[option]+'&'
	}
	return query.substring(0, query.length - 1);
}