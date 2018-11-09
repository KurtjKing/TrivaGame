window.onload = function() {
    var intervalId;
    var timer = 30;
    var correct = 0;
    var incorrect = 0;
    //need set of questions
  
    var questionArray = [
      {
        question:
          "Who was the singer of The Smiths?",
        answers: [
          "Kurt Cobain",
          "Morrissey",
          "Mick Jagger"
        ],
        correctAnswer: 'Morrissey'
      },
      {
        question:
          "What was the first Nirvana record?",
        answers: [
          "Bleach",
          "Sticky Fingers",
          "1983"
        ],
        correctAnswer: "Bleach"
      },
      {
        question:
          "Who only ate jalapenos and milk while recording Station to Station?",
        answers: [
          "Tom Petty",
          "Iggy Pop",
          "David Bowie"
        ],
        correctAnswer: "David Bowie"
      },
    ];
  
    //this is your timer.  It is working.  Do not touch it.
    function startTimer() {
      intervalId = setInterval(decrement, 1000);
    }
  
    function decrement() {
      timer--;
      $("#countdown").html("<span>" + timer + "<span>");
  
      if (timer === 0) {
        stopTimer();
      }
    }
  
    function stopTimer() {
      clearInterval(intervalId);
      // nextQuestion();
    }
  
    function getQuestions() {
      //Get first questio
  
      for (i = 0; i < questionArray.length; i++) {
        $("#quiz-area").append("<h2>" + questionArray[i].question + "</h2>");
  
        //Loop through question array and create buttons for each answer
        // Clear button div of any newly created buttons
  
        for (var j = 0; j < questionArray[i].answers.length; j++) {
          $("#quiz-area").append(
            "<h3><input type='radio' name='question-"  +
              i +
              "' value='" +
              questionArray[i].answers[j] +
              "''>" +
              questionArray[i].answers[j]
          );
        }
      }
      $("#quiz-area").append("<button id='submit-btn'>Done</button>");
    }
  
    function checkScore() {
      //Queston 1
      $.each($("input[name='question-0']:checked"), function() {  // checks the radio btn input if checked
        if ($(this).val() === questionArray[0].correctAnswer) { // checks question 0 for correct answer
          correct++; // adds to correct answer
        } else {
          incorrect++; // add to incorrect answer
        }
      });
  
      //Question 2
       $.each($("input[name='question-1']:checked"), function() {  // checks the radio btn input if checked
        if ($(this).val() === questionArray[1].correctAnswer) { // checks question 1 for correct answer
          correct++; // adds to correct answer
        } else {
          incorrect++; // add to incorrect answer
        }
      });
  
  
      //Question 3
       $.each($("input[name='question-2']:checked"), function() {  // checks the radio btn input if checked
        if ($(this).val() === questionArray[2].correctAnswer) { // checks question 2 for correct answer
          correct++; // adds to correct answer
        } else {
          incorrect++; // add to incorrect answer
        }
      });
  
  

  
    }
  
  function displayResults(){  // shows results
    $("#quiz-area").empty();
    $("#timer-area").empty();
    $("#quiz-area").append("<h3>Correct:  " + correct + "</h3>");
    $("#quiz-area").append("<h3> Incorrect:  " + incorrect + "</h3>");
  
    if(correct > incorrect) {
      $("#quiz-area").prepend("<h4>Winner, Winner, Chicken Dinner!</h4><br>")
    } else {
      $("#quiz-area").prepend("<h4>Wrong, try again!</h4><br>")
    }
  }
    
    // Click Events
    $(document).on("click", "#startGame", function() {  // runs startTimer, gets questions on click of start btn
      $("#startGame").replaceWith();
  
      startTimer();
      decrement();
      getQuestions();
    });
  
    $(document).on("click", "#submit-btn", function() {  // runs checkScore & displayResults function on click of submit btn
      checkScore();
      displayResults();
    });
  };