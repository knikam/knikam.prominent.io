(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      
      if(numCorrect<=3){
        resultsContainer.innerHTML = `Your score: ${numCorrect} out of ${myQuestions.length} <br><button style="align-items:center; background-color: #ED3237; text-align: center; margin-bottom: 5px; align:center;"><a href="essential.html"  style="color: white;"> We recommend you all our courses </a></button>`
      }
      else if(numCorrect>3 && numCorrect<=6){
        resultsContainer.innerHTML = `Your score: ${numCorrect} out of ${myQuestions.length} <br><button style="align-items:center; background-color: #ED3237; text-align: center; margin-bottom: 5px; align:center;"><a href="stimulator.html"  style="color: white;"> We recommend you our Stimulator, Innovator, Proficient course </a></button>`
      }
      else if(numCorrect>7 && numCorrect<=9){
        resultsContainer.innerHTML = `Your score: ${numCorrect} out of ${myQuestions.length} <br><button style="align-items:center; background-color: #ED3237; text-align: center; margin-bottom: 5px; align:center;"><a href="innovator.html"  style="color: white;"> We recommend you our Innovator, Proficient course </a></button>`
      }
      else {
        resultsContainer.innerHTML = `Your score: ${numCorrect} out of ${myQuestions.length} <br><button style="align-items:center; background-color: #ED3237; text-align: center; margin-bottom: 5px; align:center;"><a href="proficient.html"  style="color: white;"> We recommend you our Proficient courses </a></button>`
      }
    }
  
    const quizContainer = document.getElementById('quizz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "I __ to Newyork last year.",
        answers: {
          a: "go",
          b: "went",
          c: "gone"
        },
        correctAnswer: "b"
      },
      {
        question: "Where ___ Sarah live?",
        answers: {
          a: "are",
          b: "is",
          c: "do",
          d: "does"
        },
        correctAnswer: "d"
      },
      {
        question: "Has Steve got a sister?No, he ___, but he's got 2 brothers.",
        answers: {
          a: "has",
          b: "hasn't",
          c: "havesn't",
          d: "not"
        },
        correctAnswer: "b"
      },
      {
        question: "How many people ___ in your family?",
        answers: {
          a: "are there",
          b: "is there",
          c: "there are",
          d: "there"
        },
        correctAnswer: "a"
      },
      {
        question: "Which words are spelled correctly?",
        answers: {
          a: "photos",
          b: "potatoes",
          c: "tomatoes",
          d: "all"
        },
        correctAnswer: "d"
      },
      {
        question: "Which sentence is correct?",
        answers: {
          a: "The telephone is calling",
          b: "The telephone is ringing",
          c: "The telephone is sounding"
        },
        correctAnswer: "b"
      },
      {
        question: "Which of the following modals doesn't have a short form?",
        answers: {
          a: "cannot",
          b: "may not",
          c: "need not",
          d: "none of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "___ do you want to learn english",
        answers: {
          a: "Where",
          b: "How",
          c: "Why",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "____ sun is ____ star",
        answers: {
          a: "a, an",
          b: "a, the",
          c: "the, a",
          d: "the, the"
        },
        correctAnswer: "c"
      },
      {
        question: "___ do you want to learn englishI have just seen ___ mouse and ___ elephant",
        answers: {
          a: "a, a",
          b: "a, an",
          c: "an, an",
          d: "an, a"
        },
        correctAnswer: "b"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();