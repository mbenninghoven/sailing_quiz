$( document ).ready(function() {
	startGame();
    $("#submission").submit(function( event ) {
    	var checkedRadio = $("input[type='radio']:checked").val();

    	if($("input[name='answer']:checked").length == 0){
			alert("Answer the question!");
		}
		else {
			validateAnswer(checkedRadio);
		}
    	event.preventDefault();
	});
	$(".subbut").click(function(e) {
		e.preventDefault();
  		startGame();
	});
});
var currentQuestion, numberCorrect;
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


function startGame(){
	currentQuestion = 0;
	numberCorrect = 0;
	$('.subbut').hide();
	$('.submissions').show();
	loadnewQ();
}

function loadnewQ(){
	if (currentQuestion == 5) {
   		showScore();
   	}
   	else {
   		var currentChoices = quiz[currentQuestion].choices;
		var displaycurrent =  currentQuestion + 1;

		$('.instructions').text("Question Number " + displaycurrent + " out of 5");
		$('.displayq').text(quiz[currentQuestion].question);

		for (var i = 0; i < currentChoices.length; i++){

			$("label[for='answer_one']").text(currentChoices[0]);
			$('#answer_one').val(currentChoices[0]);
			$("label[for='answer_two']").text(currentChoices[1]);
			$('#answer_two').val(currentChoices[1]);
			$("label[for='answer_three']").text(currentChoices[2]);
			$('#answer_three').val(currentChoices[2]);
			$("label[for='answer_four']").text(currentChoices[3]);
			$('#answer_four').val(currentChoices[3]);
		}
	    	$("input[type='radio']:checked").prop('checked',false);
   	}
}

function validateAnswer(checked){
        var correctAnswer = quiz[currentQuestion].correct;
		if (checked == correctAnswer){
			numberCorrect++;	
		}
		currentQuestion++;
		loadnewQ();
}

function showScore (){
	$('.submissions').hide();
	$('.subbut').css('display', 'inline-block');
	$('.displayq').text("You scored " + numberCorrect + " out of 5!");
}