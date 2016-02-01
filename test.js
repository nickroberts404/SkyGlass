const skyglass = require('./skyglass.js');
const http = require('http');

// skyglass.getStars(handleData);
// skyglass.getStars({con: 'And', mag: 3}, handleData);
// skyglass.getConstellation('And', handleData);
skyglass.getConstellations(handleData);
// skyglass.addToConstellation([1224, 4545], handleData);
// skyglass.removeFromConstellation([1224, 4545], handleData);
// skyglass.addConnection('Tau', [1224, 4545], handleData);
// skyglass.removeConnection('Ori', [2333, 5666] handleData);

function handleData(err, data){
	if (err) console.error('SkyGlass Error: ', err);
	else console.log('Data: ', data);
}
