$( document ).ready(function() {
    $("#submission").submit(function( event ) {
    	var checkedRadio = $("input[type='radio']:checked").val();
    	validateAnswer(checkedRadio);
    	event.preventDefault();
	});
});

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
var numberCorrect = 0;

loadnewQ();

//Display the first object's properties upon loading the page
//iterate through the object and display the first question,
function loadnewQ(){ 
	/*if (currentQuestion == quiz.length) {
		console.log("quizlength" + quiz.length);
		$('displayq').text("You scored " + numberCorrect + " out of 5!");
	}
	else {*/
		var currentChoices = quiz[currentQuestion].choices;
		console.log(currentChoices);


		$('.displayq').text(quiz[currentQuestion].question);
		// or for loop
		for (var i = 0; i < currentChoices.length; i++){
			console.log(currentChoices[i]);
			$("label[for='answer_one']").text(currentChoices[0]);
			$('#answer_one').val(currentChoices[0]);
			$("label[for='answer_two']").text(currentChoices[1]);
			$('#answer_two').val(currentChoices[1]);
			$("label[for='answer_three']").text(currentChoices[2]);
			$('#answer_three').val(currentChoices[2]);
			$("label[for='answer_four']").text(currentChoices[3]);
			$('#answer_four').val(currentChoices[3]);
		}
		if( currentQuestion > 0) {
	    	$("input[type='radio']:checked").prop('checked',false);

	   }
	}
//}

function validateAnswer(checked){

        var correctAnswer = quiz[currentQuestion].correct;
        console.log(correctAnswer);
        quiz.length++;
		if (checked == correctAnswer){
			console.log(checked);
			numberCorrect++;
			showScore();
		}
		else{
			showScore();
		alert("Incorrect!");
		}
		currentQuestion++;
		loadnewQ();
}

function showScore (){
		if (currentQuestion == 5) {
		//console.log("quizlength" + quiz.length);
		$('displayq').text("You scored " + numberCorrect + " out of 5!");
	}
}