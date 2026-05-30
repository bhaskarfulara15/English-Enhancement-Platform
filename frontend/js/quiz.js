const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        let score = 0;
        const totalQuestions = 2;

        // Correct answers
        const answers = {
            q1: "b",
            q2: "b"
        };

        // Get selected answers
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');

        // Validation
        if (!q1 || !q2) {
            alert("Please answer all questions!");
            return;
        }

        // Calculate score
        if (q1.value === answers.q1) score++;
        if (q2.value === answers.q2) score++;

        // Convert to percentage
        const percentage = Math.round((score / totalQuestions) * 100);

        // Show result
        document.getElementById("result").innerText =
            `Your Score: ${score}/${totalQuestions} (${percentage}%)`;

        // ✅ SAVE TO LOCAL STORAGE (IMPORTANT)
        let quizzes = JSON.parse(localStorage.getItem("quizScores")) || [];
        quizzes.push(percentage);
        localStorage.setItem("quizScores", JSON.stringify(quizzes));

        // ✅ SEND TO BACKEND
        try {
            const res = await fetch("http://localhost:5000/api/quiz/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: 1,
                    score: percentage   // send % instead of raw score
                })
            });

            const data = await res.json();
            console.log("Saved to backend:", data);

        } catch (error) {
            console.log("Backend failed, data saved locally:", error);
        }
    });
}