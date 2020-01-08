console.log('It is a great day to code');
const scores = [];
let correct = [];
// let finalScore = scores.reduce(sumScores);
// // console.log(`final-score: ${finalScore}`);
// function sumScores(total, num) {
//   return total + num;
// }

//Add event listener to question options in order to create functionality to display the correct question
const questionOptions = document.querySelector('.quiz-options');
console.log(questionOptions);
questionOptions.addEventListener('click', questionHandler);
//define callback

function questionHandler(evt) {
  evt.preventDefault();
  // console.log(evt);
  // console.log(evt.target);
  const selectedButton = evt.target;
  // const selections = Array.from(selectedButton);
  // console.log(selections);
  selectedButton.disabled = true;
  console.log(evt);
  const questionParameter = `.${evt.target.dataset.key}`;

  // console.log(questionParameter);
  //provide the question and answers into the question-area
  //remove the user notification
  userNotification.style.display = 'none';

  //Grab the quiz area to un-hide it
  const quizArea = document.querySelector(`${questionParameter}`);
  quizArea.style.display = 'inline';
  // console.log(quizArea);
  //add event listener to question buttons
  const answerArea = document.querySelector('.quiz-container');
  console.log(answerArea);
  answerArea.addEventListener('click', handleAnswer);
}
// questionOptions.addEventListener('onmouseup', disableButton);
// function disableButton(evt) {
//   console.log(evt.target);
//   evt.target.disabled = true;
// }

function handleAnswer(evt) {
  console.log(evt);
  const hideQuestionArea = evt.path[3];
  if (evt.target.nodeName === 'BUTTON' && evt.target.dataset.key === 'xy') {
    const userSelection = evt.target;
    // console.log(userSelection);
    // console.log(`correct answer: ${evt.target}`);
    // userSelection.style.backgroundColor = 'green';
    // userSelection.style.color = 'white';
    // userSelection.innerText = 'You are correct';
    const score = evt.target.value;
    scores.push(score * 10);
    console.log(score);
    console.log(scores);
    correct = 'yes';
    console.log(correct);
  } else if (
    evt.target.nodeName === 'BUTTON' &&
    evt.target.dataset.key !== 'xy'
  ) {
    // console.log(`wrong answer, ${evt.target}`);
    evt.target.style.backgroundColor = 'red';
    evt.target.style.color = 'white';
    evt.target.innerText = "You'll get it next time";
    correct = 'no';
    console.log(correct);
  }
  //hide the question area
  hideQuestionArea.style.display = 'none';
  //reveal the userNotification
  notifyUser();
}

const userNotification = document.querySelector('.notification');
console.log(userNotification);
const comment = document.querySelector('.notify-player');
console.log(comment);

//Create function to show notification
function notifyUser() {
  if (correct === 'yes') {
    console.log(correct);
    comment.innerText = 'Great job, you are correct. Choose another question';
    userNotification.style.borderColor = 'green';
  } else {
    comment.innerText = 'Sorry, give it another try choose another question';
    userNotification.style.borderColor = 'red';
  }
  userNotification.style.display = 'block';
}

//create function to disable question option buttons on mouseUp
// questionOptions.addEventListener('onmouseup', disableButton);

// function disableButton(evt) {
//   console.log(evt);
// }
