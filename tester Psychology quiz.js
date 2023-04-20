function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "What is the greek meaning of Psychology called?",
		answers: {
			a: 'Psyche(mind)-logos(strengthen)'
			b: 'Psyche(mind)-logos(spirit,soul)' 
			c: 'Psyche(unconscious)-logos(openessness)'
		},
		correctAnswer: 'b'
	},
	{
		question: "Whom feilds of psychology specalizes in area's of;-ArcheTypes, shadow work , collective unconscious?",
		answers: {
			a: 'Stigmund Freud',
			b:'B.F.Skinner'
			c: 'Carl Jung'
		},
		correctAnswer: 'c'
	}
];

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
showQuestions(questions, quizContainer);
