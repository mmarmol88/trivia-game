console.log('It is a great day to code');
let scores = [0];
let correct = [];
let usedButtons = [];
const welcome = document.querySelector('.welcome');
const jeopardyArea = document.querySelector('.jeopardy');
const userNotification = document.querySelector('.notification');
const comment = document.querySelector('.notify-player');

//Add functionality that stores name input value and adds event-listener to start button
let userInput;

const startButton = document.querySelector('.start');
startButton.addEventListener('click', startsGame);
function startsGame(evt) {
  evt.preventDefault();
  userInput = document.querySelector('.user-input').value;
  welcome.style.display = 'none';
  jeopardyArea.style.display = 'grid';
  jeopardyArea.style.gridTemplateRows = '0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr';
  jeopardyArea.style.gridTemplateColumns = '1fr 1fr 1fr';
}

//add event-listener to check-score
const checkScore = document.querySelector('.check-score');
checkScore.addEventListener('click', scoreChecker);

function scoreChecker() {
  let totalScore = scores.reduce(sumScores);
  comment.innerHTML = `${userInput ||
    'Buddy'}: You have a total of <span>${totalScore}</span> points so far, keep at it!`;
  checkScore.style.backgroundColor = 'white';
  checkScore.style.color = 'black';
  return totalScore;
}
function sumScores(total, num) {
  return (total += num);
}

//Add event listener to the grid options in order to create functionality to display the correct question
const answerButtons = document.querySelectorAll('.user-response');
const answerArray = Array.from(answerButtons);

const questionOptions = document.querySelectorAll('.grid');
const gridArray = Array.from(questionOptions);
//add event listener to each button
function createListener() {
  //create a loop function to add event listener to the individual buttons
  gridArray.forEach(item => {
    item.addEventListener('click', questionHandler);
    // item.addEventListener('onmouseup', quizAreaFocus);
  });
}

createListener();
//define callback
function questionHandler(evt) {
  evt.preventDefault();
  let selectedButton = evt.target;
  usedButtons.push(selectedButton);
  selectedButton.disabled = true;
  selectedButton.style.backgroundColor = 'rgb(0, 51, 102)';

  const questionParameter = `.${evt.target.dataset.key}`;

  //remove the user notification
  userNotification.style.display = 'none';
  //Grab the quiz area to un-hide it
  const quizArea = document.querySelector(questionParameter);

  //remove event-listener from grid buttons
  function removeListener() {
    gridArray.forEach(item => {
      item.removeEventListener('click', questionHandler);
    });
  }
  removeListener();

  quizArea.style.display = 'inline';
  quizArea.scrollIntoView();
  function addListener() {
    answerArray.forEach(item => {
      item.addEventListener('click', handleAnswer);
    });
  }
  addListener();
}

function handleAnswer(evt) {
  //check if user answered
  const hideQuestionArea = evt.path[3];
  if (evt.target.nodeName === 'BUTTON' && evt.target.dataset.key === 'xy') {
    const score = evt.target.value;
    scores.push(score * 10);
    correct = 'yes';
  } else {
    correct = 'no';
  }
  //Add event listener to grid items again
  createListener();
  //hide the question area
  hideQuestionArea.style.display = 'none';
  //reveal the userNotification
  notifyUser();
}

//Create function to show notification
function notifyUser() {
  if (correct === 'yes') {
    comment.innerText =
      'Great job! you are correct, go ahead try another question';
    userNotification.style.borderColor = 'rgb(0,102,153)';
  } else {
    comment.innerText = 'Not quite right but try another question';
    userNotification.style.borderColor = 'rgb(255,153,0)';
  }
  checkScore.style.backgroundColor = 'rgb(255, 153, 0)';
  checkScore.style.color = 'rgb(228, 233, 237)';
  userNotification.style.display = 'block';
}

//restart functionality
const restartButton = document.querySelector('.restart');
//add event listener
restartButton.addEventListener('click', startOver);
function startOver(evt) {
  evt.preventDefault;
  usedButtons.forEach(item => {
    item.disabled = false;
    item.style.backgroundColor = 'rgb(255, 153, 0)';
  });
  comment.innerText = `Go ahead ${userInput}, choose another question`;
  //score reset
  scores = [0];
}
