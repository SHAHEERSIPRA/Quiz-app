const questions = [
    {
        question: "What is the output of print(2 ** 3) in Python?",
        answers: [
            { Text: "6", correct: false },
            { Text: "8", correct: true },
            { Text: "4", correct: false },
            { Text: "9", correct: false },
        ]
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        answers: [
            { Text: "int", correct: false },
            { Text: "float", correct: false },
            { Text: "string", correct: true },
            { Text: "boolean", correct: false },
        ]
    },
    {
        question: "In HTML, which tag is used to define an unordered list?",
        answers: [
            { Text: "ol", correct: false },
            { Text: "ul", correct: true },
            { Text: "li", correct: false },
            { Text: "list", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { Text: "Cascading Style Scripts", correct: false },
            { Text: "Central Style Sheets", correct: false },
            { Text: "Cascading Style Sheets", correct: true },
            { Text: "Centralized Style Sheets", correct: false },
        ]
    },
    {
        question: "Which language is primarily used for iOS app development?",
        answers: [
            { Text: "Kotlin", correct: false },
            { Text: "Swift", correct: true },
            { Text: "Java", correct: false },
            { Text: "C++", correct: false },
        ]
    },
    {
        question: "Which operator is used to compare two values in JavaScript?",
        answers: [
            { Text: "=", correct: false },
            { Text: "==", correct: false },
            { Text: "!=", correct: false },
            { Text: "===", correct: true },
        ]
    },
    {
        question: "Which operator is used to compare two values in JavaScript?",
        answers: [
            { Text: "O(n)", correct: false },
            { Text: "O(n²)", correct: false },
            { Text: "O(log n)", correct: true },
            { Text: "O(n log n)", correct: false },
        ]
    },
    {
        question: "In Python, what is the output of len([1, 2, 3, 4])?",
        answers: [
            { Text: "3", correct: false },
            { Text: "4", correct: true },
            { Text: "5", correct: false },
            { Text: "6", correct: false },
        ]
    },
    {
        question: "Which of the following is a valid way to declare a function in JavaScript?",
        answers: [
            { Text: "function myFunc() {}", correct: true },
            { Text: "func myFunc() {}", correct: false },
            { Text: "def myFunc() {}", correct: false },
            { Text: "fn myFunc() {}", correct: false },
        ]
    },
    {
        question: "In SQL, which command is used to retrieve data from a database?",
        answers: [
            { Text: "SELECT", correct: true },
            { Text: "INSERT", correct: false },
            { Text: "UPDATE", correct: false },
            { Text: "DELETE", correct: false },
        ]
    },
    {
        question: "Which keyword is used to inherit a class in Python?",
        answers: [
            { Text: "inherits", correct: false },
            { Text: "extends", correct: false },
            { Text: "super", correct: false },
            { Text: "class", correct: true },
        ]
    },
    {
        question: "What does the term 'DOM' stand for in web development?",
        answers: [
            { Text: "Data Object Model", correct: false },
            { Text: "Document Object Model", correct: true },
            { Text: "Digital Object Manager", correct: false },
            { Text: "Dynamic Object Model", correct: false },
        ]
    },
    {
        question: "Which of the following is not a loop structure in JavaScript?",
        answers: [
            { Text: "for", correct: false },
            { Text: "while", correct: false },
            { Text: "repeat", correct: true },
            { Text: "do-while", correct: false },
        ]
    },
    {
        question: "What does git status do in Git?",
        answers: [
            { Text: "Commits changes", correct: false },
            { Text: "Shows the current state of the working directory", correct: true },
            { Text: "Creates a new branch", correct: false },
            { Text: "Merges branches", correct: false },
        ]
    },
    {
        question: "In Java, what is the default value of a boolean variable?",
        answers: [
            { Text: "null", correct: false },
            { Text: "0", correct: false },
            { Text: "false", correct: true },
            { Text: "true", correct: false },
        ]
    },
    {
        question: "What is the purpose of the # symbol in CSS?",
        answers: [
            { Text: "To select a class", correct: false },
            { Text: "To select an ID", correct: true },
            { Text: "To comment out code", correct: false },
            { Text: "To create a hyperlink", correct: false },
        ]
    },
    {
        question: "Which of the following is used to declare constants in JavaScript?",
        answers: [
            { Text: "var", correct: false },
            { Text: "let", correct: false },
            { Text: "const", correct: true },
            { Text: "static", correct: false },
        ]
    },
    {
        question: "Which protocol is used to send email?",
        answers: [
            { Text: "HTTP", correct: false },
            { Text: "SMTP", correct: true },
            { Text: "FTP", correct: false },
            { Text: "POP", correct: false },
        ]
    },
    {
        question: "Which method is used to convert a string to an integer in Python?",
        answers: [
            { Text: "int()", correct: true },
            { Text: "str()", correct: false },
            { Text: "parseInt()", correct: false },
            { Text: "toInt()", correct: false },
        ]
    },
    {
        question: "What does NaN stand for in JavaScript?",
        answers: [
            { Text: "Not a Number", correct: true },
            { Text: "Not a Null", correct: false },
            { Text: "Null and Nullified", correct: false },
            { Text: "Null and None", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function SelectAnswer(e) {
    const Selectedbtn = e.target;
    const isCorrect = Selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        Selectedbtn.classList.add("correct");
        score++;
    } else {
        Selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
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
