var questions = [{

	question: "Which Gators legend is not part of Florida's Ring of Honer?",

	choices: ["Tim Tebow", "Steve Spurrier", "Emmitt Smith", "Wilbur Marshall"],

	correctAnswer: "Tim Tebow",

}, {

	question: "When was the last time that the Florida vs. Georgia game did not take place in Jacksonville?",

	choices: ["1990", "1993", "1995", "1997"],

	correctAnswer: "1995",

}, {

	question: "Historically, what school is the University of Florida's main rival?",

	choices: ["University of Central Florida", "Ohio State University", "University of Georgia", "Florida State University"],

	correctAnswer: "Florida State University",

}, {

	question: "In what year did the Florida Gators win their first National Title?",

	choices: ["1965", "1912", "1996", "2004"],

	correctAnswer: "1996",

}, {

	question: "Which member of the 2007 Florida Gators was a Heisman Trophy winner?",

	choices: ["Tim Tebow", "Dorian Munroe", "Jamar Hornsby", "Jeremy Finch"],

	correctAnswer: "Tim Tebow",

}, {

	question: "Florida beat Florida State in which bowl game at the end of the 1996 season to secure the National Championship?",

	choices: ["Rose Bowl", "Sugar Bowl", "Fiesta Bowl", "Orange Bowl"],

	correctAnswer: "Sugar Bowl",

}, {

	question: "Which Florida head coach never beat Florida State in Tallahassee, Florida?",

	choices: ["Ron Zook", "Will Muschamp", "Urban Meyer", "Steve Spurrier"],

	correctAnswer: "Steve Spurrier",

}, {

	question: "What is the name of the alligator mascot of the Florida Gators?",

	choices: ["Alex E. Gator", "Albert E. Gator", "Alvin E. Gator", "Allie E. Gator"],

	correctAnswer: "Albert E. Gator",

}, {

	question: "In what year did Florida Gators football celebrate its 100th anniversary?",

	choices: ["1975", "1988", "2006", "2010"],

	correctAnswer: "2006",

}, {

	question: "The all-time career passing yards leader in Florida history is:",

	choices: ["Chris Leak", "Rex Grossman", "Shane Matthews", "Tim Tebow"],

	correctAnswer: "Chris Leak",

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