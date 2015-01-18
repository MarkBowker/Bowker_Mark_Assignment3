//alert("JavaScript works!");

var oxygenTime = 45;
var spears = false;
var oxygen = true;
var greatWhite = 7.5;
var tigerShark = 5;
var blueShark = 2.5;
var sharkNames =["Great White", "Tiger", "Blue Shark"]

//Procedures
//Function1 Kill a Great White

var killGreatWhite = function (numberOfGreatWhites) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (greatWhite * numberOfGreatWhites)
		console.log("You have " + oxygenTime)
			if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	}
};

//Function 2 Kill a Tiger Shark

var killTigerShark = function (numberOfTigerSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (tigerShark * numberOfTigerSharks)
		console.log("You have " + oxygenTime)
			if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	}
};

//Function 3 Kill a Blue Shark

var killBlueShark = function (numberOfBlueSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (blueShark * numberOfBlueSharks)
		console.log("You have " + oxygenTime)
			if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	}
};

killBlueShark(10)



