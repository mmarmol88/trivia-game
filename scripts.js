// JM: Are you tracking multiple scores? I think you can just use an integer (ex. 0). It looks like you're also only tracking correct one at a time, so may also need only be an integer.
let scores = [0];
let correct = [];
let usedButtons = [];
const welcome = document.querySelector('.welcome');
const jeopardyArea = document.querySelector('.jeopardy');
const userNotification = document.querySelector('.notification');
const comment = document.querySelector('.notify-player');
const checkScore = document.querySelector('.check-score');
const answerButtons = document.querySelectorAll('.user-response');
// JM: answerArray is redundant as answerButtons is already an array.  See also questionOptions and gridArray.
const answerArray = Array.from(answerButtons);
const questionOptions = document.querySelectorAll('.grid');
const gridArray = Array.from(questionOptions);
const restartButton = document.querySelector('.restart');

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
  createListener();
}

//add event-listener to checkScore
checkScore.addEventListener('click', scoreChecker);
function scoreChecker() {
  let totalScore = scores.reduce(sumScores);
  comment.innerHTML = `${userInput ||
    'Buddy'}: You have a total of <span>${totalScore}</span> points so far, <br>keep at it!`;
  checkScore.style.backgroundColor = 'white';
  checkScore.style.color = 'black';
  return totalScore;
}

function sumScores(total, num) {
  return (total += num);
}

//Add event listener to all the buttons with the class grid in order to add functionality to display the correct question
const createListener = function() {
  gridArray.forEach(item => {
    item.addEventListener('click', questionHandler);
  });
};

//define callback for jeopardy area buttons
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
  addListener();
  removeListener();
  quizArea.style.display = 'block';
  quizArea.scrollIntoView();
}

const addListener = function() {
  answerArray.forEach(item => {
    item.addEventListener('click', handleAnswer);
  });
};

//removes listener from buttons of class grid from Jeopardy Area
const removeListener = function() {
  gridArray.forEach(item => {
    item.removeEventListener('click', questionHandler);
  });
};

function handleAnswer(evt) {
  //check if answer correct
  const hideQuestionArea = evt.path[3];
  if (evt.target.dataset.key === 'xy') {
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
const notifyUser = function() {
  if (correct === 'yes') {
    comment.innerHTML =
      'Great job! you are <span>correct</span>, go ahead try another question';
    userNotification.style.borderColor = 'rgb(0,102,153)';
  } else {
    comment.innerHTML =
      'Oh no<span>Sorry</span>, not quite right<br> but try another question';
    userNotification.style.borderColor = 'rgb(255,153,0)';
  }
  checkScore.style.backgroundColor = 'rgb(255, 153, 0)';
  checkScore.style.color = 'rgb(228, 233, 237)';
  userNotification.style.display = 'block';
};

//event handler to restart button
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
