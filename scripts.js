console.log('It is a great day to code');
const scores = [0];
let correct = [];
const welcome = document.querySelector('.welcome');
const jeopardyArea = document.querySelector('.jeopardy');

//Add functionality that stores name input value and adds event-listener to start button
let userInput;

const startButton = document.querySelector('.start');
startButton.addEventListener('click', startsGame);
function startsGame(evt) {
  evt.preventDefault();
  userInput = document.querySelector('.user-input').value;
  console.log(userInput);
  welcome.style.display = 'none';
  jeopardyArea.style.visibility = 'visible';
}

//add event-listener to check-score
const checkScore = document.querySelector('.check-score');
checkScore.addEventListener('click', scoreChecker);
function scoreChecker() {
  let totalScore = scores.reduce(sumScores);
  console.log(totalScore);
  comment.innerText = `You have ${totalScore} points so far, keep at it`;
  return totalScore;
}
function sumScores(total, num) {
  return (total += num);
}

//Add event listener to question options in order to create functionality to display the correct question
const questionOptions = document.querySelectorAll('.grid');
const gridArray = Array.from(questionOptions);
//add event listener to each button
function createListener() {
  //create a loop function to add event listener to the individual buttons
  gridArray.forEach(item => {
    item.addEventListener('click', questionHandler);
  });
}
createListener();

//define callback
function questionHandler(evt) {
  evt.preventDefault();
  // console.log(evt);
  // console.log(evt.target);
  const selectedButton = evt.target;
  selectedButton.disabled = true;
  // console.log(evt.target);
  const questionParameter = `.${evt.target.dataset.key}`;
  //remove the user notification
  userNotification.style.display = 'none';
  //Grab the quiz area to un-hide it
  //provide the question and answers into the question-area
  const quizArea = document.querySelector(`${questionParameter}`);
  quizArea.style.display = 'inline';
  quizArea.addEventListener('click', handleAnswer);
}

function handleAnswer(evt) {
  console.log(evt);
  const hideQuestionArea = evt.path[3];
  console.log(evt);
  if (evt.target.nodeName === 'BUTTON' && evt.target.dataset.key === 'xy') {
    const score = evt.target.value;
    scores.push(score * 10);
    correct = 'yes';
  } else if (
    evt.target.nodeName === 'BUTTON' &&
    evt.target.dataset.key !== 'xy'
  ) {
    correct = 'no';
  } else {
    //Jerrica suggested to use to exit function and stop event listener
    return;
  }
  //hide the question area
  hideQuestionArea.style.display = 'none';
  //reveal the userNotification
  notifyUser();
}

const userNotification = document.querySelector('.notification');
const comment = document.querySelector('.notify-player');

//Create function to show notification
function notifyUser() {
  if (correct === 'yes') {
    comment.innerText =
      'Great job! you are correct, go ahead try another question';
    userNotification.style.borderColor = 'rgb(238, 192, 107)';
  } else {
    comment.innerText = 'Not quite right but try another question';
    userNotification.style.borderColor = 'red';
  }
  userNotification.style.display = 'block';
}
