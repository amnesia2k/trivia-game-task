"use strict";

// Array of quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Saturn", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Michealangelo",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which animal is the fastest land mammal?",
    options: ["Cheetah", "Lion", "Leopard", "Elephant"],
    correctAnswer: "Cheetah",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Aconcagua"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "In what country was the game of Football (Soccer) invented?",
    options: ["Brazil", "England", "Argentina", "Spain"],
    correctAnswer: "England",
  },
  {
    question: "What is the chemical compound of Gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: "Au",
  },
  {
    question: "Who wrote the famous play 'Hamlet'?",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "William Shakespeare",
      "George Orwell",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Which country hoste the first ever FIFA World Cup?",
    options: ["United States", "Uruguay", "Brazil", "France"],
    correctAnswer: "Uruguay",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["8", "4", "3", "6"],
    correctAnswer: "6",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which is the largest country in the world by land area",
    options: ["United States", "China", "Russia", "India"],
    correctAnswer: "Russia",
  },
  // Add more questions as needed
];
// console.log(quizQuestions);

let currentQuestionIndex = 0; // Monitors the current question index
let score = 0; // Stores the user's score

// Function to load a question
function loadQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
    // Clear the result message from the previous question
    document.getElementById("result").innerText = "";
    // Get the current question object
    const questionObj = quizQuestions[currentQuestionIndex];

    // Display the question text
    document.getElementById("question").innerText = questionObj.question;

    // Clear any previous options
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    // Loop through each option and create a button for it
    questionObj.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => checkAnswer(option); // Set the function to call when the button is clicked
      optionsContainer.appendChild(button);
    });
  } else {
    // End the quiz if there are no more questions
    endQuiz();
  }
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
  const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

  // Compare the selected answer with the correct answer
  if (selectedAnswer === correctAnswer) {
    score++; // Increase the score if the answer is correct
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById(
      "result"
    ).innerText = `Wrong! The correct answer was ${correctAnswer}.`;
  }

  // Move to the next question after 1sec delay
  currentQuestionIndex++;
  setTimeout(loadQuestion, 1000);
}

// Function to end the quiz and display the score
function endQuiz() {
  document.getElementById("question").innerText = "Quiz Over!";
  document.getElementById("options").innerHTML = "";
  document.getElementById(
    "result"
  ).innerText = `You scored ${score} out of ${quizQuestions.length}.`;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score
  document.getElementById("result").innerText = ""; // Clear the result message
  loadQuestion(); // Start the quiz again
}

// Event listener for the restart button
document
  .getElementById("restart-button")
  .addEventListener("click", restartQuiz);

loadQuestion();
