const data = [
  {
    id: 1,
    question: "From which language is the word ketchup derived?",
    answers: [
      {
        answers: "India",
        isCorrect: false,
      },
      {
        answers: "Italy",
        isCorrect: false,
      },
      {
        answers: "China",
        isCorrect: true,
      },
      {
        answers: "Japan",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is the capital of the Netherlands?",
    answers: [
      {
        answers: "Kabul",
        isCorrect: false,
      },
      {
        answers: "Herat",
        isCorrect: false,
      },
      {
        answers: "Kathmandu",
        isCorrect: false,
      },
      {
        answers: "Amsterdam",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: "What is the capital of the United Kingdom?",
    answers: [
      {
        answers: "London",
        isCorrect: true,
      },
      {
        answers: "San Jose",
        isCorrect: false,
      },
      {
        answers: "New York",
        isCorrect: false,
      },
      {
        answers: "WashingtonDC",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which is the country with the biggest population in Europe?",
    answers: [
      {
        answers: "German",
        isCorrect: true,
      },
      {
        answers: "Paris",
        isCorrect: false,
      },
      {
        answers: "Russia",
        isCorrect: true,
      },
      {
        answers: "Paraguay",
        isCorrect: false,
      },
    ],
  },
];

const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answer");
const submit = document.querySelector(".button");
const content = document.querySelector(".content");
const result = document.querySelector(".result");
const correctAnswer = document.querySelector(".correct");
const wrongAnswer = document.querySelector(".wrong");
const score = document.querySelector(".score");
const play = document.querySelector(".playagain");

let qNumber = 0;
let correct = 0;
let wrong = 0;
let selectedAnswer;
let qIndex = data.length;

showQuestion(qNumber);

function showQuestion(qNumber) {
  if (qIndex === qNumber) return showResult();
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map((item, index) => {
      return ` <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
              <label for=${index}>${item.answers}</label>`;
    })
    .join("");

  answerSelected();
}

function answerSelected() {
  answersContainer.querySelectorAll("input").forEach((item) => {
    item.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedAnswer != null) {
    qNumber++;
    selectedAnswer === "true" ? correct++ : wrong++;
    showQuestion(qNumber);
  } else {
    alert("Please select an answer");
  }
});

function showResult() {
  content.style.display = "none";
  result.style.display = "block";

  correctAnswer.textContent = "Correct Answer: " + correct;
  wrongAnswer.textContent = "Wrong Answer: " + wrong;
  score.textContent = "Score: " + (correct - wrong) * 100;

  play.addEventListener("click", (e) => {
    e.preventDefault();
    playAgain();
  });
}

function playAgain() {
  content.style.display = "block";
  result.style.display = "none";
  correct = 0;
  wrong = 0;
  score.textContent = 0;
}
