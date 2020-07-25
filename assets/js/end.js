const username = document.getElementById('username')
const saveScoreb = document.getElementById('saveScorebtn')
const finalScore = document.getElementById('finalScore')
const mostRecentScor = localStorage.getItem('mostRecentScore')

finalScore.innerText = "Your score is " + mostRecentScor
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
// console.log(highScores);



// console.log(JSON.parse(localStorage.getItem("highScores")))

username.addEventListener('keyup',function(){
    saveScoreb.disabled = !username.value;
});

function saveHighScore(event){
    console.log("save button clicked")
    event.preventDefault()
    const score = {
        score: mostRecentScor,
        name: username.value
    };
    highScores.push(score);
    highScores.sort(function(a,b){
        return b.score - a.score
    })
    highScores.splice(5);

    localStorage.setItem('highScores',JSON.stringify(highScores))
};

