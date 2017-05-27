$(document).ready(function() {


//START VALUES
var targetNumber = 0;
var crystalNumbers = [];
var wins = 0;
var losses = 0;
var currentSum = 0;


//GAME START
//At the start of the game these things occur:
//Into an empty container generate--target number, four crystal buttons with random values
//Add Value into HTML, use jQuery to change value of buttons 

//Generate Target
function generateTarget(){
	
	targetNumber = Math.floor(Math.random() * 101) +19;
	
	$("#target-number").html(targetNumber);
	//TEST
	console.log(targetNumber);

}

//Assign random values to crystal
function crystalValues(){

	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		crystalNumbers.push(num);
	}
	//TEST
	console.log(crystalNumbers); 
}

//RESET game
function reset() {
	crystalNumbers = [];
	$("#start-game").html("<h1>" + "Play Again" + "</h1>");
}


$("#start-game").on("click", function startGame() {
	generateTarget();
	crystalValues();
	$("#current-sum").html(0);
	currentSum = 0;
});


//GAMEPLAY
//Click events to add crystals to total
//Conditional statements to determine and record wins and losses 
$("#crystal1").on("click", function() {
	currentSum = currentSum + crystalNumbers[0];
	console.log("current total: " + currentSum);
	$("#current-sum").html(currentSum);

	if (currentSum == targetNumber){
	alert("WINNER!");
	wins++;
	$("#wins").html(wins);
	reset();

}

else if (currentSum > targetNumber) {
	alert("YOU LOSE!");
	losses++;
	$("#losses").html(losses);
	reset();
}

});

$("#crystal2").on("click", function() {
	currentSum = currentSum + crystalNumbers[1];
	console.log("current total: " + currentSum);
	$("#current-sum").html(currentSum);

	if (currentSum == targetNumber){
	alert("WINNER!");
	wins++;
	$("#wins").html(wins);
	reset();
}

else if (currentSum > targetNumber) {
	alert("YOU LOSE!");
	losses++;
	$("#losses").html(losses);
	reset();
}

});

$("#crystal3").on("click", function() {
	currentSum = currentSum + crystalNumbers[2];
	console.log("current total: " + currentSum);
	$("#current-sum").html(currentSum);

	if (currentSum == targetNumber){
	alert("WINNER!");
	wins++;
	$("#wins").html(wins);
	reset();
}

else if (currentSum > targetNumber) {
	alert("YOU LOSE!");
	losses++;
	$("#losses").html(losses);
	reset();
}

});



$("#crystal4").on("click", function() {
	currentSum = currentSum + crystalNumbers[3];
	console.log("current total: " + currentSum);
	$("#current-sum").html(currentSum);

	if (currentSum == targetNumber){
	alert("WINNER!");
	wins++;
	$("#wins").html(wins);
	reset();
}

else if (currentSum > targetNumber) {
	alert("YOU LOSE!");
	losses++;
	$("#losses").html(losses);
	reset();
}
});




});


//conditional statements to determine if the number has reached the target (win) or exceeded it (lose), record win/loss, restart



