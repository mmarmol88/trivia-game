console.log('It is a great day to code');

//Add event listener to question options
const questionOptions = document.querySelector('.quiz-options');
console.log(questionOptions);
questionOptions.addEventListener('click', questionHandler);
//define callback

function questionHandler(evt) {
  evt.preventDefault();
  console.log(evt);
  //Grab the quiz area to unhide it
  const quizArea = document.querySelector('.quiz-area');
  quizArea.style.display = 'inline';

  // if (evt.target.className === 'grid') {
  // }
}

//add event listener to question buttons
const answerButton = document.querySelector('.question-area');
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
  } else if (
    evt.target.nodeName === 'BUTTON' &&
    evt.target.dataset.key !== 'xy'
  ) {
    console.log(`wrong answer, ${evt.target}`);
    evt.target.style.backgroundColor = 'red';
    evt.target.style.color = 'white';
    evt.target.innerText = "You'll get it next time";
  }

  //Add function to run once the user has picked an answer
  buttonDisabler();
}

// grab all user response buttons
// const responseButtons = document.querySelector('.question-area');

//create a function to disable the user response buttons
function buttonDisabler(evt) {
  evt.preventDefault();
  console.log(evt.target);
  if (
    evt.target.className === 'disable-button' &&
    evt.target.disabled === false
  ) {
    console.log(evt.target);
    evt.target.disabled = true;
  }

  // console.log(evt.target);
  // console.log(buttonA);
  // if (buttonA.disabled === false) {
  //   buttonA.disabled = true;
  // }
}
