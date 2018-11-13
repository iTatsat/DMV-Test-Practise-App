var questionsAnswers = [
{
	question : "You may drive off of the paved roadway to pass another vehicle:",
	answer : "Under no circumstances.",
	options : ["If the shoulder is wide enough to accommodate your vehicle.", "If the vehicle ahead of you is turning left."]
},

{
	question : "You are approaching a railroad crossing with no warning devices and are unable to see 400 feet down the tracks in one direction. The speed limit is:",
	answer : "15 mph.",
	options : ["20 mph.", "25 mph."]
},

{
	question : "When parking your vehicle parallel to the curb on a level street:",
	answer : "Your wheels must be within 18 inches of the curb.",
	options : ["Your front wheels must be turned toward the street.", "One of your rear wheels must touch the curb."]
},

{
	question : "When you are merging onto the freeway, you should be driving:",
	answer: "At or near the same speed as the traffic on the freeway." ,
	options : ["5 to 10 MPH slower than the traffic on the freeway.", "The posted speed limit for traffic on the freeway."] 

},

{
	question : "When driving in fog, you should use your:" ,
	answer: "Low beams." ,
	options : ["High beams.","Fog lights only."] 

},

{
	question : "A white painted curb means:",
	answer: "Loading zone for passengers or mail only.",
	options : ["Loading zone for freight or passengers.", "Loading zone for freight only"] 

},

{
	question : "A school bus ahead of you in your lane is stopped with red lights flashing. You should:",
	answer: "Stop as long as the red lights are flashing.",
	options : ["Slow to 25 MPH and pass cautiously.", "Stop, then proceed when you think all of the children have exited the bus."] 

},

{
	question :"California's Basic Speed Law says:" ,
	answer:"You should never drive faster than posted speed limits." ,
	options : ["You should never drive faster than is safe for current conditions.", "The maximum speed limit in California is 70 mph on certain freeways."] 

},

{
	question : "You just sold your vehicle. You must notify the DMV within ___ days." ,
	answer: "5",
	options : ["10", "15"] 

},

{
	question : "To avoid last minute moves, you should be looking down the road to where your vehicle will be in about ______________.",
	answer: "5 to 10 seconds",
	options : ["10 to 15 seconds", "15 to 20 seconds"] 

}

];


var questions = document.querySelector("#question");
var resetButton = document.querySelector("#reset");
var counter = 0; 
var optionsA = document.querySelectorAll(".options");
var resetButton = document.querySelector("#reset");
var pTag = document.querySelectorAll("p");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var score = 0;

init();

resetButton.addEventListener("click", function(){
	init();

});



function init(){
	setUpQandA();
	restart();
	scoreMe();
		
}

function scoreMe(){

	document.querySelector("#score").textContent = "#qs practised : " + score;

}


function restart(){

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "Change question";

	for (i = 0; i < pTag.length; i++){
		pTag[i].style.backgroundColor = "white";
	}

}


function setUpQandA(){
	
	
	var random = Math.floor(Math.random() * questionsAnswers.length);
	question.textContent = questionsAnswers[random].question;
	var rAnswer = Math.floor(Math.random() * 3);
	pTag[rAnswer].textContent = questionsAnswers[random].answer;
	console.log(rAnswer);
	

	if(rAnswer === 2){

	pTag[0].textContent = questionsAnswers[random].options[0];
	pTag[1].textContent = questionsAnswers[random].options[1];

	}else if (rAnswer ===1){
		pTag[0].textContent = questionsAnswers[random].options[0];
		pTag[2].textContent = questionsAnswers[random].options[1];

	} else {
		pTag[1].textContent = questionsAnswers[random].options[0];
		pTag[2].textContent = questionsAnswers[random].options[1];

	}	

	for(var i = 0; i < pTag.length; i++){
			// add click listeners to options
			pTag[i].addEventListener("click" , function(){
			//grab color to clicked square
			var clickedOption= this.textContent;
			//compare color to pickedColor
			if(clickedOption===questionsAnswers[random].answer){
				messageDisplay.textContent = "Correct!!";
				h1.style.backgroundColor = "#32CD32";
				resetButton.textContent = "Play Again ?";
				this.style.backgroundColor = "#32CD32";
				score = score + 1;
				scoreMe();
			}else{
				this.style.backgroundColor = "#B22222";
				h1.style.backgroundColor = "#B22222";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
	
