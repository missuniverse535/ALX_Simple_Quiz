// Function to check the user's answer
function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";
    
    // 2. Retrieve the user's answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if user has selected an answer
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedRadio.value;
    
    // 3. Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// 4. Add an event listener to the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
});
