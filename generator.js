const jsonfile = require('jsonfile');

const ressourcesFolder = "./ressources/";
const placesFolder = "./ressources/places/";
const buildFolder = "./build/";
const sourceFolder = "./src/";
const fileName = "data.json";

const verbose = false;


jsonfile.readFile(sourceFolder + fileName, function(err, deseases) {

	if (err && verbose) { console.log(err); }

	else {

		// For each desease
		deseases.map(function(desease) {

			// Create an empty featuresCollection
			desease.featuresCollection = { type:"FeatureCollection", features:[] };

			// For each places of our desease

			desease.places.map(function(place) {

				// Read the associated json
				jsonfile.readFile(placesFolder + place.file, function(err, obj) {
					// Check if it's empty or missing
					if (err) {
						if(verbose) {
					  		console.log(desease.name, " - Missing place ->  ", place.name, "\n");
						}
					}
					else {
						// If everything is ok, then push the geojson into the featuresCollection
						desease.featuresCollection.features.push(obj[0]);
					}
				});

			});


		});

		// WTF javascript map are sync, why have i to do this ?
		setTimeout(function() {
			// Then write the final datas
			jsonfile.writeFile(
				buildFolder + fileName,
				deseases,
				{ spaces: 2 },
				function(err) {
					console.log("==== File populated with " + deseases.length + " deseases =====");
					if(err)
						if(verbose)
							console.log("\n\n     With errors -> \n\n", err);
				}
			);
		}, 1500);

	}

});
