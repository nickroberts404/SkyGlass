# SkyGlass
An API that interacts with the Telescope service.

**Currently in testing, Telescope server isn't live yet**

### API

`getStars(options, callback)`

Returns JSON object of stars.

Options|Description|Default
--------|-------------|--------
limit|Limit the number of stars in the response.| 50
page|Define what page you want back.|1
con|Filter the stars by their constellation.|All
mag|Filter the stars by their magnitude.|All
magparam|Changes how the mag query is interpreted.|lt
search|Performs a text search.| *none*

Example: 

	skyglass.getStars({
		limit: 20,
		page: 2,
		con: 'Ori',
		mag: 3,
		magparam: gt,
	})

This will return stars 21-40 that are in Orion with a magnitude of 3 or greater.

-------------

`getConstellations(callback)`

Invokes callback with data for all constellations.

-------------

`getConstellation(con, callback)`

This method accepts a constellation's abbreviation as an argument *([good list here](https://en.wikipedia.org/wiki/88_modern_constellations))*  and invokes the callback with its data.

Example: `skyglass.getConstellation('Ori')`

This will return JSON for the constellation of Orion.

-------------

`addConnection(con, [starid1, starid2], callback)`

This method accepts a constellation's abbreviation, an array of 2 star's ids, and a callback.

It will add a connection between these two stars to the constellation.

Example: `skyglass.addConnections('Tau', [1234, 4321], ...)`

-------------

`removeConnection(con, [starid1, starid2], callback)`

This method accepts a constellation's abbreviation, an array of 2 star's ids, and a callback.

It will remove a connection between these two stars to the constellation.

Example: `skyglass.removeConnections('And', [1234, 4321], ...)`



