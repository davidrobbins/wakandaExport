﻿// A simple log for the output var log = "Count cities-before: " + ds.City.length;   // Main function function doImportCities() {     /*   The doc. to import is in the solution folder, in a subfolder         named "Import". We load the full document in one shot  (loadText)          and split it in an array (one line = one element).     */ 	var lines = loadText(ds.getModelFolder().path + "ImportData/cities.csv" ).split("\n"); 	/*   Declare the variable that will hold the columns of each line.           We know the columns will be:            columns[0]   Name of the city    */        	var columns = [];	// Now, loop for each entry in the array  	lines.forEach( function(oneLine) {  	// Get the columns for current line  	columns = oneLine.split(",");    	// Get the city. Create it if needed.	var theCity = ds.City.find("name = :1", columns[0]);	if(theCity == null) { // Not found => create it		theCity = new ds.City({			name : columns[0],			province: columns[1],			population: columns[2]		});	//Save it  	theCity.save();	   	}    	});} // Call the function doImportCities ();   // Log resultlog += " / Count cities-after: " + ds.City.length;