const questions = [

  {
    subject: "Mathematics",
    question: "What is the value of 5 + 7?",
    answers: ["10", "11", "12", "13"],
    correct: "12"
  },

  {
    subject: "Science",
    question: "Which organelle is known as the powerhouse of the cell?",
    answers: [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Cell wall"
    ],
    correct: "Mitochondria"
  },

  {
    subject: "English",
    question: "Choose the correct plural of 'child'.",
    answers: [
      "Childs",
      "Childes",
      "Children",
      "Childrens"
    ],
    correct: "Children"
  },

  {
    subject: "Social Science",
    question: "Which is the largest continent?",
    answers: [
      "Africa",
      "Asia",
      "Europe",
      "Australia"
    ],
    correct: "Asia"
  },

  {
    subject: "Logic",
    question: "What comes next: 2, 4, 6, 8, ?",
    answers: ["9", "10", "11", "12"],
    correct: "10"
  },

  {
    subject: "Intelligence",
    question: "If CAT is coded as DBU, how is DOG coded?",
    answers: [
      "EPH",
      "EOG",
      "DPH",
      "FPI"
    ],
    correct: "EPH"
  }

];


let currentQuestion = 0;
let score = 0;


function startQuiz() {

  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz")
    .scrollIntoView({
      behavior: "smooth"
    });

  showQuestion();
}


function showQuestion() {

  const q = questions[currentQuestion];

  document.getElementById("question-number")
    .innerText =
    `Question ${currentQuestion + 1} of ${questions.length}
     | ${q.subject}`;

  document.getElementById("question")
    .innerText = q.question;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.innerText = answer;

    button.className = "answer-btn";

    button.onclick = () =>
      selectAnswer(answer);

    answersDiv.appendChild(button);

  });

  document.getElementById("result")
    .innerText = "";

}


function selectAnswer(answer) {

  const correct =
    questions[currentQuestion].correct;

  if (answer === correct) {

    score++;

    document.getElementById("result")
      .innerText = "✅ Correct!";

  } else {

    document.getElementById("result")
      .innerText =
      `❌ Wrong! Correct answer: ${correct}`;

  }

  document
    .querySelectorAll(".answer-btn")
    .forEach(button => {

      button.disabled = true;

    });

}


function nextQuestion() {

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    showQuestion();

  } else {

    document.getElementById("question")
      .innerText =
      "🎉 Quiz Completed!";

    document.getElementById("answers")
      .innerHTML = "";

    document.getElementById("question-number")
      .innerText = "";

    document.getElementById("result")
      .innerText =
      `Your Score: ${score}/${questions.length}`;

  }

}
