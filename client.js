const skyglass = require('./skyglass.js');

skyglass.getStars(handleStars);
skyglass.getConstellation('Ori');
skyglass.getConstellations();
skyglass.addConnection('Tau');
skyglass.removeConnection('Ori');

function handleStars(err, data){
	return true;
}