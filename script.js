
console.log("SafeNet JavaScript Connected!");

const quizForm = document.getElementById("safetyQuiz");
const quizResult = document.getElementById("quizResult");
const resetButton = document.getElementById("resetQuiz");

const correctAnswers = {
    q1: "c",
    q2: "b",
    q3: "d",
    q4: "a",
    q5: "c",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "b",
    q10: "d",
    q11: "c",
    q12: "a",
    q13: "d",
    q14: "b",
    q15: "c",
    q16: "d",
    q17: "a",
    q18: "b",
    q19: "c",
    q20: "d"
};

if (quizForm) {

    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let score = 0;
        let unanswered = [];

        for (let question in correctAnswers) {

            let selectedAnswer = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (!selectedAnswer) {
                unanswered.push(question);
            }
            else if (selectedAnswer.value === correctAnswers[question]) {
                score++;
            }
        }

        if (unanswered.length > 0) {

            quizResult.style.display = "block";

            quizResult.innerHTML = `
                <h2>Almost There!</h2>
                <p>You have not answered all the questions yet.</p>
                <p>Please answer all 20 questions before submitting.</p>
            `;

            quizResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        let percentage = (score / 20) * 100;
        let message = "";

        if (score === 20) {
            message = "Outstanding! You are an Internet Safety Champion!";
        }
        else if (score >= 16) {
            message = "Excellent! You have great digital safety knowledge!";
        }
        else if (score >= 10) {
            message = "Good job! Keep learning to become safer online.";
        }
        else {
            message = "Keep learning! Explore our SafeNet pages and try again.";
        }

        quizResult.style.display = "block";

        quizResult.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p><strong>Your Score:</strong> ${score} / 20</p>
            <p><strong>Percentage:</strong> ${percentage}%</p>
            <p>${message}</p>
            <p>Keep practising safe and responsible internet habits!</p>
        `;

        quizResult.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}

if (resetButton && quizForm) {

    resetButton.addEventListener("click", function() {

        quizResult.style.display = "none";
        quizResult.innerHTML = "";

    });

}
