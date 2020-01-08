//Create a question constructor that has subclasses of (Americas, Asia, and Europe);
class Americas {
  constructor(pointValue, question, answerOne, answerTwo, correctAnswer) {
    this.pointValue = pointValue;
    this.question = question;
    this.answerOne = answerOne;
    this.answerTwo = answerTwo;
    this.correctAnswer = correctAnswer;
  }
}

const americasFifty = new Americas(
  50,
  'Have you heard the latest buzz? The Mayans domesticated this native insect',
  'fishing worm',
  'silkworm',
  'bee'
);
console.log(americasFifty);
const americasHundred = new Americas(
  100,
  'In 1513 this Spaniard made the first recorded European exploration of what is now the U.S. mainland',
  'Christopher Columbus',
  'Simon Bolivar',
  'Ponce De Leon'
);
console.log(americasHundred);
console.log(Americas);

//Add event listener to my point-value buttons
//Connect the point-value buttons from my question selection area to be associated with appropriate subclass of questions
//Append the selected point-value question and related answers to the question-area
//Add event-listener to the question area for answer selection

//write if/else statement that checks if the answer is correct or wrong and adds a button that notifies user if they are correct
//return the point-value to a score array
//check if score array sum = 1000 points
//notify player that they won
