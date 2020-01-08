console.log('It is a great day to code');

//Create the questions using OOP the constructor method
// class Americas {
//   constructor(pointValue, question, answerOne, answerTwo, correctAnswer) {
//     this.pointValue = pointValue;
//     this.question = question;
//     this.answerOne = answerOne;
//     this.answerTwo = answerTwo;
//     this.correctAnswer = correctAnswer;
//   }
// }

// const americasFifty = new Americas(
//   50,
//   'Have you heard the latest buzz? The Mayans domesticated this native insect',
//   'fishing worm',
//   'silkworm',
//   'bee'
// );
// console.log(americasFifty);
// const americasHundred = new Americas(
//   100,
//   'In 1513 this Spaniard made the first recorded European exploration of what is now the U.S. mainland',
//   'Christopher Columbus',
//   'Simon Bolivar',
//   'Ponce De Leon'
// );
// console.log(americasHundred);
// console.log(Americas);

//Add event listener to question options
const questionOptions = document.querySelector('.quiz-options');
console.log(questionOptions);
questionOptions.addEventListener('click', questionHandler);
//define callback

function questionHandler(evt) {
  evt.preventDefault();
  console.log(evt);
  //provide the question and answers into the question-area
  // const questionArea = document.querySelector('.question');
  // questionArea.innerText = Americas[0].question;
  //Grab the quiz area to un-hide it
  const quizArea = document.querySelector('.americas-fifty');
  quizArea.style.display = 'inline';
  handleAnswer();
}

//add event listener to question buttons
const answerButton = document.querySelector('.answer-area');
console.log(answerButton);
answerButton.addEventListener('click', handleAnswer);

function handleAnswer(evt) {
  evt.preventDefault();
  //   console.log(evt);
  if (evt.target.nodeName === 'BUTTON' && evt.target.dataset.key === 'xy') {
    console.log(`correct answer: ${evt.target}`);
    // console.log(evt);
    evt.target.style.backgroundColor = 'green';
    evt.target.style.color = 'white';
    evt.target.innerText = 'You are correct';
    //Attempt to hide the question area
    //Add function to run once the user has picked an answer
    buttonDisabler();
  } else if (
    evt.target.nodeName === 'BUTTON' &&
    evt.target.dataset.key !== 'xy'
  ) {
    console.log(`wrong answer, ${evt.target}`);
    evt.target.style.backgroundColor = 'red';
    evt.target.style.color = 'white';
    evt.target.innerText = "You'll get it next time";
    buttonDisabler();
  }
  //Attempt to hide the question area
}

// grab all user response buttons
// const responseButtons = document.querySelector('.question-area');

//create a function to disable the user response buttons
function buttonDisabler(evt) {
  if (
    evt.target.className === 'disable-button' &&
    evt.target.target.disabled === false
  ) {
    console.log(evt.target);
    evt.target.disabled = true;
  }
}
