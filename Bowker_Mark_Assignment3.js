//alert("JavaScript works!");

var oxygenTime = 45;
var newTank = 45;
var returnToSurface = false;
var oxygen = true;
var greatWhite = 7.5;
var tigerShark = 5;
var blueShark = 2.5;
var weight = 180
var sink = false
var sharkNames =["Great White", "Tiger", "Blue Shark"]

//Procedure Function: Return to the surface and get a new tank
function getNewTank () {
	var stillBreathing = newTank + oxygenTime
		if (returnToSurface === true) {
		console.log("You now have " + stillBreathing + " minutes to kill Sharks!" )
			} else {
			console.log("Then your oxygen left is " + oxygenTime + " minutes")
			return stillBreathing;
			}
		};

//Function1 Kill a Great White

var killGreatWhite = function (numberOfGreatWhites) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (greatWhite * numberOfGreatWhites)
		console.log("You have " + oxygenTime + " to stay down and kill Sharks!")
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	
};
//Function 2 Kill a Tiger Shark

var killTigerShark = function (numberOfTigerSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (tigerShark * numberOfTigerSharks)
		console.log("You have " + oxygenTime + " to stay down and kill Sharks!")
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	
};

//Function 3 Kill a Blue Shark

var killBlueShark = function (numberOfBlueSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (blueShark * numberOfBlueSharks)
		console.log("You have " + oxygenTime + " to stay down and kill Sharks!")
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}
	
};

//Nested Loop for looking at stopwatch to check the time

var checkStopwatch = function () {
		oxygenTime = oxygenTime - 1
		for (var min = oxygenTime; min === oxygenTime; min--){
				if (oxygenTime = oxygenTime - 2){
				break;} 
				}
			for (var seconds = 60; seconds >= 1; seconds--) {
			console.log("You have approximately " + min + " minutes and " + seconds + " seconds before you run out of oxygen!")
		
}
};

// Nested Conditional for whether or not you need a vest?

var needVest = function (weight, sink) {
	if (weight >= 180) {
		console.log("In that case, you will require a vest!")
			if (sink === false) {
				console.log("You will also require some weights for your vest!")
				} else {
				console.log("Since you already sink, you will not require any weights!")
				};
		} else { 
		console.log("Well, you won't need a vest then!")
	}	
};

needVest(180, true)




