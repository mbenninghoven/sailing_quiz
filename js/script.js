//Uses objects to represent the questions and answers
var quiz =  [
	{
		"question": "What do you call the person controlling the jib sheets?",
		"choices": ["skipper", "controller", "crew", "captain"],
		"correct": "crew"
	}, {
		"question": "What is the term for when your boat is pointed straight into the wind?",
		"choices": ["dead in the water", "shark bait", "in irons", "sailor's lament"],
		"correct": "in irons"
	}, {
		"question": "Which one of these is NOT a knot?",
		"choices": ["cow hitch", "figure 8", "bowline", "top knot"],
		"correct": "top knot"
	}, {
		"question": "Which line tightens/controls the jib?",
		"choices": ["main sheet", "main halyard", "cunningham", "jib sheets"],
		"correct": "main halyard"
	}, {
		"question": "Which of the following is NOT a term for a board that prevents the hull from sideslipping through the water?",
		"choices": ["cutter", "daggerboard", "keel", "centerboard"],
		"correct": "cutter"
	}
];

var currentQuestion = 0;
//var checked = "";

loadnewQ();
checkAnswer();

//Display the first object's properties upon loading the page
//iterate through the object and display the first question,
function loadnewQ(){ 
	
	var currentChoices = quiz[currentQuestion].choices;
	console.log(currentChoices);


	$('.displayq').text(quiz[currentQuestion].question);
	// or for loop
	for (var i = 0; i < currentChoices.length; i++){
		console.log(currentChoices[i]);
		$("label[for='answer_one']").text(currentChoices[0]);
		$("label[for='answer_two']").text(currentChoices[1]);
		$("label[for='answer_three']").text(currentChoices[2]);
		$("label[for='answer_four']").text(currentChoices[3]);
		checkAnswer();
	}

}

function checkAnswer(){

		$("#submission").submit(function( event ) {
		//$('#button').click(function() {
    	$("input[type='radio']:checked").each(function() {
        var checked = $('input:radio:checked').next('label:first').html();
        console.log("this is what I checked: " + checked);
                validateAnswer(checked);
        //console.log($("label[for='"+checked+"']").text());
        event.preventDefault();
        });
       	//});
		});

     }


function validateAnswer(checked){

        var correctAnswer = quiz[currentQuestion].correct;
		if (checked == correctAnswer){
			console.log(checked);
		currentQuestion++;
		//loadnewQ();
		}
		else{
		alert("Incorrect!");
		//loadnewQ();
		}
		//var checked = $("form input[type='radio']:checked").val();
		//console.log("this is the value from the button checked: " + checked);
}

function newQ(){
	for (var i = 0; i < currentChoices.length; i++){
		console.log(currentChoices[1]);
	}
}

//Once the submit button is pressed check 'choice' 
//against 'correct' property value (validation)
//throws error if nothing was selected

function questionSubmit (){

}


//function that iterates through to next question and displays
//the subsequent property within the object array




//function that shows the users score after last question is answered


//new game function that reloads the page to original question
//clears progress


