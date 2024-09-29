let currentGenre;
let selectedQuestionIdx = 0;
let score = 0;

const answerButtons = document.querySelector("#answer-buttons");
const questionElement = document.querySelector("#question");

let nextButton = document.querySelector("#next-btn");
let genreButtons = document.querySelectorAll(".Genre-button");

document.querySelector("#instructions").style.display = "block";
document.querySelector("#quizHolder").style.display = "none";
document.querySelector("#gameover-message").style.display = "none";

function startGame() { // Reset the game display to the initial state
    document.querySelector("#instructions").style.display = "block";
    document.querySelector("#quizHolder").style.display = "none";
    document.querySelector("#gameover-message").style.display = "none";
    document.querySelector("#Genre").style.display = "block";
}

genreButtons.forEach(button => {
    button.addEventListener("click", () => quiz(button.innerText)); // Added event listener for genre buttons
});

function quiz(genre) { // Hide instructions and genre selection, show the quiz holder
    selectedGenre = genre;
    selectedQuestionIdx = 0;
    score = 0;

    document.querySelector("#instructions").style.display = "none";
    document.querySelector("#Genre").style.display = "none";
    document.querySelector("#quizHolder").style.display = "block";
    
    render();
}

function render() { 
    resetEntry();  // Clear previous options
    const currentQuestion = questions[selectedGenre][selectedQuestionIdx];
    questionElement.innerHTML =`${selectedQuestionIdx + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => { // Logging the answers for the question
    const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       button.addEventListener("click", () => answerChoice(answer)); 
       answerButtons.appendChild(button);
    });
}

function resetEntry() { // Clear out selections
    answerButtons.innerHTML = ''; 
    nextButton.style.display = "none";   
}

function answerChoice(answer) { // Check for correct answer and update score
    const correct = answer.correct;
    if (correct) {
        score++;
    }

    const buttons = answerButtons.querySelectorAll('button'); // Show correct/incorrect answers
    buttons.forEach(button => {
        //button.disabled = true;
        if (button.innerHTML === answer.text) {
            button.classList.add(correct ? "correct" : "incorrect");
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {  
    selectedQuestionIdx++;
    if (selectedQuestionIdx < questions[selectedGenre].length) {
         render();
    } else {
        showResults();
    }
});

function showResults() { // Display the results
    resetEntry();
    questionElement.innerHTML = `Your score: ${score}/${questions[selectedGenre].length}`;
    const upliftingMessage = document.createElement("p");

    if (score === questions[selectedGenre].length) {
         upliftingMessage.innerHTML = "CONGRATULATIONS!!! You can keep your Music Card!";
    } else {
        upliftingMessage.innerHTML = "Music Card REVOKED! Try again!!";
    }

    document.querySelector("#gameover-message").style.display = "block";
    document.querySelector("#uplifting-message").innerHTML = upliftingMessage.innerHTML;
}

document.querySelector("#restart-btn").addEventListener("click", () => {
    startGame(); // so the user can play again
});

startGame(); 
render()


/*

I was initially confused on how to start so I watched a tutorial video and looked up
methods on mdn! Also I did make a few changes with the name and how many questions 
each genre held(Increased the questions to ten). 

Links: 
https://www.youtube.com/watch?v=PBcqGxrr9g8  // a quiz demo
https://www.youtube.com/watch?v=wimxsE2YK3M  // reset button demo
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList // using classlist
https://developer.mozilla.org/en-US/docs/Web/CSS/display // learning to hide the elements I didnt want shown


*/