const question = [
  {
    question: "Brain of computer is ?",
    answers: [
      { text: "Mouse", correct: "false" },
      { text: "Keyboard", correct: "false" },
      { text: "CPU", correct: "true" },
      { text: "Speaker", correct: "false" },
    ],
  },
  {
    question: "Which country are the Giza Pyramids in ?",
    answers: [
      { text: "Egypt", correct: "true" },
      { text: "Australia", correct: "false" },
      { text: "Morrocco", correct: "true" },
      { text: "India", correct: "false" },
    ],
  },
  {
    question: "Gir National Park in Gujarat is famous for ?",
    answers: [
      { text: "Lion", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Crocodile", correct: "false" },
      { text: "Peacock", correct: "false" },
    ],
  },
  {
    question: "Gateway of India is located at ?",
    answers: [
      { text: "Delhi", correct: "false" },
      { text: "Hyderabad", correct: "false" },
      { text: "Mumbai", correct: "true" },
      { text: "Goa", correct: "false" },
    ],
  },
  {
    question: "Martyrs' Day is celebrated every year on ?",
    answers: [
      { text: "15th August", correct: "false" },
      { text: "30th September", correct: "false" },
      { text: "30th January", correct: "true" },
      { text: "2nd October", correct: "false" },
    ],
  },
];

const questionElement = document.querySelector(".quiz");
const answerButtons = document.querySelector(".ans-button");
const nextButton = document.querySelector(".submit-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = question[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML =
    questionNumber + "." + " " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Corrected from "true" to true
  });

  nextButton.style.display = "block";
  nextButton.classList.add("submit");
}

startQuiz();
