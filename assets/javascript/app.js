var questions = [{

	question: "Who was the two-time Heisman Trophy winner at Ohio State?",

	choices: ["Archie Griffin", "Woody Hayes", "Santonio Holmes", "Aubrey Taylor"],

	correctAnswer: "Archie Griffin",

}, {

	question: "Which year did Ohio State win their first National Championship?",

	choices: ["1907", "2002", "1978", "1942"],

	correctAnswer: "1942",

}, {

	question: "When did Woody Hayes retire?",

	choices: ["1956", "1990", "1978", "1983"],

	correctAnswer: "1978",

}, {

	question: "Who is OSU's arch-rival?",

	choices: ["Michigan", "Penn State", "Michigan St.", "North Carolina"],

	correctAnswer: "Michigan",

}, {

	question: "What is the name of OSU's mascot?",

	choices: ["Bucky", "Brutus", "Buckeye", "Romeo"],

	correctAnswer: "Brutus",

}, {

	question: "In the 1995 Rose Bowl, who did the Ohio State University play, and what was the score?",

	choices: ["USC: 20-14", "OSU: 45-39", "OSU: 36-18", "USC: 20-7"],

	correctAnswer: "USC: 20-7",

}, {

	question: "How many yards did Troy Smith rush for in the 2004 season?",

	choices: ["139", "222", "896", "684"],

	correctAnswer: "896",

}, {

	question: "Who was the coach in 1989?",

	choices: ["Paul Brown", "Jim Tressel", "John Cooper", "Earl Bruce"],

	correctAnswer: "John Cooper",

}, {

	question: "Who did Ohio State play in 2008 in the National Championship?",

	choices: ["MSU", "USC", "UM", "LSU"],

	correctAnswer: "LSU",

}, {

	question: "Who did OSU play in the 2006-07 National Championship?",

	choices: ["USC", "UF", "ASU", "Duke"],

	correctAnswer: "UF",

}];





  // $('#start').click(function() {

  //   $("#questions").fadeIn();

  //   $(this).hide();

  // });



var currentQuestion = 0;

var correctAnswers = 0;

var incorrectAnswers = 0;







$("#timerStarts").hide();

$(".submitAnswer").hide();

$(".gameReset").hide();

$("#correctAnswers").hide();

$("#incorrectAnswers").hide();



function checkAnswer () { 

	for (var i = 0; i < questions.length; i++) {

		var userChoice = $("input[name = 'question-" + i +"']:checked");

		if (userChoice.val() == questions[i].correctAnswer) {

			correctAnswers++; 



			} else {

				incorrectAnswers++;

				

		}

	}

	$("#correctAnswers").append(" " + correctAnswers);

	$("#incorrectAnswers").append(" " + incorrectAnswers); 

};





function timer() {

	var seconds = 60;

	counter = setInterval (function() {

	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');

		if (seconds === -1) {

			$("#timerStarts").html("<h2> Out of Time! </h2>");

			clearInterval(counter);

			function delayScore(){

				$("#showQuestions").hide();

				$("#timerStarts").hide();

				$(".submitAnswer").hide();

				checkAnswer();

				$("#correctAnswers").show();

				$("#incorrectAnswers").show();

			}

			setTimeout(delayScore, 1000);

		}

	}, 1000);

	

};



$(".gameStart").on("click", function() {

	$(".gameStart").hide();

	displayCurrentQuestion();

	$("#timerStarts").show();

	timer();





});



function displayCurrentQuestion() {

	$(".submitAnswer").show();

	for (var i = 0; i < questions.length; i++) {

		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");

		for (var j = 0; j < questions[i].choices.length; j++) {

			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );



		}

	}

	$(".submitAnswer").on("click", function() {

		$("#showQuestions").hide();

		$("#timerStarts").hide();

		$(".submitAnswer").hide();

		checkAnswer();

		clearInterval(counter);

		$("#correctAnswers").show();

		$("#incorrectAnswers").show();



	});

};