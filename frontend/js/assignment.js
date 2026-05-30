let currentQuestion = {
question: "Fill in the blank: She ___ going to school.",
correctAnswer: "is"
};

// Load Question
document.getElementById("question").innerText = currentQuestion.question;

// Submit Answer
function submitAnswer() {
const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
const correct = currentQuestion.correctAnswer.toLowerCase();

let resultText = "";

if (userAnswer === correct) {
    resultText = "✅ Correct!";
} else {
    resultText = "❌ Wrong! Correct answer is: " + correct;
    resultText += "\nSuggestion: Use correct helping verb (is/am/are)";
}

document.getElementById("result").innerText = resultText;


}
