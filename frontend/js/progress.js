async function loadProgress() {
    try {
        const res = await fetch("http://localhost:5000/api/progress/1");
        const data = await res.json();

        if (data && data.totalQuiz !== undefined) {
            updateUI(data.totalQuiz, data.avgScore);
            return;
        }
    } catch (error) {
        console.log("API failed, using localStorage...");
    }

    // Fallback to localStorage
    let quizzes = JSON.parse(localStorage.getItem("quizScores")) || [];

    let totalQuiz = quizzes.length;

    let avgScore = 0;
    if (totalQuiz > 0) {
        let sum = quizzes.reduce((a, b) => a + b, 0);
        avgScore = Math.round(sum / totalQuiz);
    }

    updateUI(totalQuiz, avgScore);
}

// Common UI updater
function updateUI(totalQuiz, avgScore) {

    // Level logic
    let level = "Beginner";
    if (avgScore >= 80) level = "Advanced";
    else if (avgScore >= 50) level = "Intermediate";

    // Suggestion logic
    let suggestion = "Practice basic grammar daily.";
    if (avgScore >= 80) suggestion = "Great job! Try advanced topics.";
    else if (avgScore >= 50) suggestion = "Improve consistency with daily practice.";

    // Update DOM
    document.getElementById("totalQuiz").innerText = totalQuiz;
    document.getElementById("avgScore").innerText = avgScore + "%";
    document.getElementById("level").innerText = level;
    document.getElementById("suggestion").innerText = suggestion;
}

loadProgress();