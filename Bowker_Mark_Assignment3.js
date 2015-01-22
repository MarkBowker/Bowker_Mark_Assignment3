//alert("JavaScript works!");

//Mark Bowker
// Section 1501
//Assignment 3

//VARIABLES

var oxygenTime = 45;
var newTank = 45;
var depth = 86;
var returnToSurface = true;
var statusOk = false;
var oxygen = true;
var greatWhite = 7;
var tigerShark = 5;
var blueShark = 3;
var weight = 180;
var sink = true;
var sharkNames =["Great White", "Tiger", "Blue Shark"]
var poisonousFish = ["Puffer Fish", "Lion Fish", "Stone Fish"]

//FUNCTIONS

//Procedure Function: Return to the surface and get a new tank
function getNewTank () {
	var stillBreathing = newTank + oxygenTime;
		if (returnToSurface === true) {
		console.log("You now have " + stillBreathing + " minutes to kill Sharks!" );
			} else {
			console.log("Then your oxygen left is " + oxygenTime + " minutes");
			return stillBreathing;
			}
		};

//Function to Kill a Great White

var killGreatWhite = function (numberOfGreatWhites) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (greatWhite * numberOfGreatWhites);
		console.log("You have " + oxygenTime + " minutes to stay down and kill more Sharks!");
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}	
};

//Function 2 Kill a Tiger Shark

var killTigerShark = function (numberOfTigerSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (tigerShark * numberOfTigerSharks);
		console.log("You have " + oxygenTime + " minutes to stay down and kill more Sharks!");
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}	
};

//Function 3 Kill a Blue Shark

var killBlueShark = function (numberOfBlueSharks) {
	if (oxygenTime > 0) {
		oxygenTime = oxygenTime - (blueShark * numberOfBlueSharks);
		console.log("You have " + oxygenTime + " minutes to stay down and kill more Sharks!");
			} else if (oxygenTime < 0) {
			console.log("out");
			return oxygenTime;
			}	
};

// Nested Conditional for whether or not you need a vest?

var needVest = function (weight, sink) {
	if (weight >= 180) {
		console.log("In that case, you will require a vest!");
			if (sink === false) {
				console.log("You will also require some weights for your vest!");
				} else {
				console.log("Since you already sink, you will not require any weights!");
				};
		} else { 
		console.log("Well, you won't need a vest then!");
	}	
};

//Nested Loop for looking at stopwatch to check the time

var checkStopwatch = function () {
		oxygenTime = oxygenTime - 1;
		for (var min = oxygenTime; min === oxygenTime; min--){
				if (oxygenTime = oxygenTime - 2){
				break;} 
		}
			for (var seconds = 60; seconds >= 1; seconds--) {
			console.log("You have approximately " + min + " minutes and " + seconds + " seconds before you run out of oxygen!");
			}
};

// function using Array property, being bitten by a poisonous fish

var bitByPoisonousFish = function(poisonousFish, message) {
	console.log("Oh No! You have been bitten by a poisonous fish!");
	for (var i = 0; i < poisonousFish.length; i++) {
	console.log("It could have been a " + poisonousFish[i] + "! " + message);
	}
}
	
// While loop used to make sure that you are not too deep!

var checkDepth = function () {
	while (depth > 75) {
	console.log("The gauge says you're too deep!, go up gradually by 5 feet to remain safe!" );
	depth = depth -5;
	console.log("Now that you've just gone up 5 feet, you're depth is "  + depth);
		} if (depth <= 75 && oxygen === true) {
		statusOk = true;
		console.log("You're fine for now!");
		return statusOk;
		}	
};

// Array Method push

var moreFish = function (poisonousFish) {
poisonousFish.push("Box Fish", "Trunk Fish");
console.log("It seems that 'Scuba Steve' has spotted two more poisonous fish!");
	console.log("Now, we will all have to keep an eye out for the following: ");
 		console.log( "The " + poisonousFish);
 		return poisonousFish;
		}

// JSON.data

var myJSON = function(){
	for (var index in jsonData.Divers){
		console.log(jsonData.Divers[index]);
	}
}

//MAIN CODE

console.log("We are going to go on a scuba diving/spearfishing adventure for the following sharks! " + sharkNames)
console.log("First we need to determine if we need a vest, and if we need weights for the vest. I weigh 180 lbs and usually sink!")
needVest(180, sink)
console.log("Well now I have my vest without any weights! When we start out, we will have " + oxygenTime + " minutes of oxygen in our tank!")
console.log("Let's go kill some sharks! It will take more time to kill certain sharks than it will others, lets start by killing one Great White Shark!")
killGreatWhite(1)
console.log ("Now, how about 3 Tiger Sharks") 
killTigerShark(3)
console.log("Since Blue Sharks aren't as tough, let's go for four of them!")
killBlueShark(3) 
console.log("Wow, we've already killed 7 sharks, we better look at our stopwatch and double check our oxygen.")
checkStopwatch()
console.log("Look's like we may have to surface, and get a new tank! Let's do that and then see how much time we have left?")
getNewTank()
console.log("That's better! Let's get back to killing more sharks, how about a couple tiger sharks? I see some down there a little deeper.")
console.log("Let's go down and chase them! Looks like we've gotten pretty deep. we better check our depth gauge and make sure we're not below 75 feet to be safe!")
checkDepth()
console.log("What was that!")
bitByPoisonousFish(poisonousFish, " I'm not sure!")
console.log("What was that Scuba Steve?")
moreFish(poisonousFish)
console.log(" I don't feel well after getting bit by that fish, and it's getting dangerous around here! I'm leaving!!!")
console.log("Hopefully, one day I will be able to match up to these guys!")
myJSON()





