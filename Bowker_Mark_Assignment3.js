//alert("JavaScript works!");

var oxygenTime = 45;
var newTank = 45;
var depth = 79;
var returnToSurface = false;
var status = false;
var oxygen = true;
var greatWhite = 7.5;
var tigerShark = 5;
var blueShark = 2.5;
var weight = 180;
var sink = false;
var dead = true;
var sharkNames =["Great White", "Tiger", "Blue Shark"]
var poisonousFish = ["Puffer Fish", "Lion Fish", "Stone Fish"]

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
// Flowchart from here

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

// function using Array property, being bitten by a poisonous fish
// This has Argument Array, argument string, and array property

var bitByPoisonousFish = function(poisonousFish, message) {
	console.log("Oh No! You have been bitten by a poisonous fish!")
	for (var i = 0; i < poisonousFish.length; i++) {
	console.log("It could have been a " + poisonousFish[i] + "! " + message)
	}
}
	

	//bitByPoisonousFish(poisonousFish," Will you survive!")
	
// While loop

var checkDepth = function () {
	while (depth > 75) {
	console.log("You're getting too deep!, return to at least 75 feet to remain safe!" )
	depth = depth -5
	console.log("Now that you've just gone up 5 feet, you're depth is "  + depth)
		} if (depth <= 75 && oxygen === true) {
		status = true
		console.log("You're fine for now!")
		return status;
		
	
	};
	
;}

// Array Method push

var moreFish = function (poisonousFish) {
poisonousFish.push("Box Fish", "Trunk Fish")
console.log("It seems that 'Scuba Steve' has spotted two more poisonous fish!")
	console.log("Now, we will all have to keep an eye out for the following: ")
		for (var i = 0; i < poisonousFish.length; i++) {
 		console.log( "The " + poisonousFish[i])
		}
};

moreFish(poisonousFish)

// JSON.data




