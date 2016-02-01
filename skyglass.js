// skyglass.js

const request = require('request');
const api = 'http://localhost:3000'

module.exports = {
	getStars: function(options, cb){
		console.log('Getting stars...');
		if (typeof options === 'function') {
			// The options argument is really our callback
			request(api+'/stars', function(err, res, body){
				options(err, JSON.parse(body));
			});
		} else {
			request(api+'/stars'+buildQuery(options), function(err, res, body){
				cb(err, JSON.parse(body));
			});
		}
	},
	getConstellations: function(cb){
		console.log('Getting constellations...');
		request(api+'/constellations', function(err, res, body){
			body = JSON.parse(body);
			for(con in body){
				body[con].connections = parseConnections(body[con].connections);
			}
			cb(err, body);
		});
	},
	getConstellation: function(con, cb){
		console.log('Getting constellation '+con+'...');
		request(api+'/constellations?con='+con, function(err, res, body){
			body = JSON.parse(body);
			body.connections = parseConnections(body.connections);
			cb(err, body);
		});
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
		body: JSON.stringify(body)}, function(err, res, body){
			cb(err, JSON.parse(body));
		});
}

function parseConnections(connections){
	return connections.map(function(val){
		val = val.split('-');
		return [parseInt(val[0]), parseInt(val[1])];
	})
}

function buildQuery(options){
	var query = '?';
	for (option in options) {
		query += option+'='+options[option]+'&'
	}
	return query.substring(0, query.length - 1);
}