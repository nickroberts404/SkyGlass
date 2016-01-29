# SkyGlass
An API that interacts with the Telescope service.

### API

getStars(options)

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

