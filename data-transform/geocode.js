var csv = require('csv');
var fs = require('fs');
var geocoder = require('geocoder');

var parser = csv.parse({delimiter: ',', columns: true}, function(crashErr, crashData){
	for (var i = 0; i < crashData.length; i++) {
		var intersectionString = crashData[i]["Primary Road"] + " and " + crashData[i]["Intersecting Road"] + " " + crashData[i]["Community"];
		
		geocoder.geocode(intersectionString, function ( geoErr, geoData ) {
			console.log(geoData)
			if (geoData.results.length > 0){
				//console.log(geoData.results[0].geometry.location);
			}
		});	
		//need to make this in a promise and slow it down to stop running into google's rate limit
	}
});

fs.createReadStream('../Bicyclist-Motorist_Crashes_2000-2013.csv').pipe(parser);