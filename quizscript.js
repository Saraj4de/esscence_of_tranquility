console.log("hello world");
function finishFunction() { 
alert ("Thank you for completing the quiz");
}

function checkanswers () {
    var score=0;
    //assign the quiz elements to the quiz variable 

    quiz=document.forms.Quiz.elements;
    //asign the answer to the question to the answer variable 
    answer1 = quiz.growth.value;
    //check the answer to the first question
    if (answer1=="70%") {
        score=score +1;
      }

      answer2= quiz.talent.value;
      
    
      alert ("Well done,your score was..."+ score);
}