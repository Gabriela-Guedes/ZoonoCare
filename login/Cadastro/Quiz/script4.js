const questions = [
  {
    question: "O que são Zoonozes",
    answers: [
      { id: 1, text: "Doenças causadas por bactérias", correct: false },
      { id: 2, text: "Doenças transmitidas de animais para seres vivos", correct: true },
      { id: 3, text: "Doenças exclusivas de seres humanos", correct: false },
      { id: 4, text: "Doenças transmitidas por insetos", correct: false },
    ],
  },
  {
    question: "Qual zoonose pode ser transmitida pela urina de ratos contaminados?",
    answers: [
      { id: 1, text: "Leptospirose", correct: true },
      { id: 2, text: "Toxoplasmose", correct: false },
      { id: 3, text: "Raiva", correct: false },
      { id: 4, text: "Leishmaniose", correct: false },
    ],
  },
  {
    question: "Qual vacina é essencial para prevenir a raiva em cães e gatos?",
    answers: [
      { id: 1, text: "Vacina contra leptospirose", correct: false },
      { id: 2, text: "Vacina antirrábica", correct: true },
      { id: 3, text: "Vacina contra febre amarela", correct: false },
      { id: 4, text: "Vacina tríplice viral", correct: false },
    ],
  },
  {
    question: "Qual dessas zoonoses é causada por um protozoário e pode ser transmitida por alimentos mal lavados ou carne crua?",
    answers: [
      { id: 1, text: "Toxoplasmose", correct: true },
      { id: 2, text: "Leptospirose", correct: false },
      { id: 3, text: "Raiva", correct: false },
      { id: 4, text: "Dengue", correct: false },
    ],
  },
  {
    question: "Qual dessas medidas ajuda na prevenção das zoonoses?",
    answers: [
      { id: 1, text: "Deixar os animais soltos para que tenham contato natural com o ambiente", correct: false },
      { id: 2, text: "Vacinar regularmente os animais contra doenças transmissíveis", correct: true },
      { id: 3, text: "Alimentar animais de estimações com resto de comida para fortalecer a imunidade", correct: false },
      { id: 4, text: "Manter o lixo doméstico acumulado em áreas externas longe da cozinha", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

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
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Voltar";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();