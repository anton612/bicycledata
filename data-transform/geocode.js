var csv = require('csv');
var fs = require('fs');
var geocoder = require('geocoder');

var outStream = fs.createWriteStream('temp.csv');

var parser = csv.parse({delimiter: ',', columns: true}, function(crashErr, crashData){
	for (var i = 0; i < crashData.length; i++) {
		var intersectionString = crashData[i]["Primary Road"] + " and " + crashData[i]["Intersecting Road"] + " " + crashData[i]["Community"];
		geocoder.geocode(intersectionString, function ( geoErr, geoData ) {
			var outString = "";
			csv.stringify(crashData[i], function(err, output){
			  outString = output;
			});


			csv.stringify(crashData[i]);
			console.log(outString);//get rate limit errors hereeee :'( 
			if (geoData.results.length > 0){
				outString += "," + geoData.results[0].geometry.location.lat + "," + geoData.results[0].geometry.location.lng + "\n";
				outStream.write(outString);
				//console.log(geoData.results[0].formatted_address  + " : " + geoData.results[0].geometry.location.lat + " , " + geoData.results[0].geometry.location.lng);
			}
		});	
		//need to make this in a promise and slow it down to stop running into google's rate limit
	}
});

fs.createReadStream('../Bicyclist-Motorist_Crashes_2000-2013.csv').pipe(parser);