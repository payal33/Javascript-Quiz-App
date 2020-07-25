import { jsQuestions, htmlQuestions, cssQuestions } from './allquestions.js';
console.log(jsQuestions)
console.log(htmlQuestions)

const questionDisplay = document.getElementById("questionShow");
const choices = Array.from(document.getElementsByClassName('choice-text'))
const progressTextshow = document.getElementById('progressText')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progress-bar-full')

const linkid = localStorage.getItem('linkid')


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = []

if(linkid === 'jslink'){
    questions = jsQuestions
}else if(linkid === 'htmllink'){
    questions = htmlQuestions
}else{
    questions = cssQuestions
}
console.log(questions)

const CORRECT_POINTS = 10;
const MAX_QUESTIONS = 10;

function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

function getNewQuestion(){
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score);
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressTextshow.innerText = "Question : " +  questionCounter + "/" + MAX_QUESTIONS
    // update the progress bar
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionDisplay.innerText = currentQuestion["question"];

    choices.forEach(function(choice){
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex , 1);

    acceptingAnswers = true
};

choices.forEach(function(choice){
    choice.addEventListener('click',function(e){
        if(!acceptingAnswers) return;
        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(CORRECT_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(function(){
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1200)     
    });
});

function incrementScore(num){
    score += num
    scoreText.innerText = score;
}

startGame();