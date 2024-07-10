
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;

var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeToggle("fast").fadeToggle("fast");
    makeSounds(randomChosenColour);
    
    level += 1;
    $("h1").text("Level " + level);
}

function makeSounds(color){
    switch (color) {
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "wrong":
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            break;
        default:
            alert("something went wrong when choosing a color: " + color + ", " + typeof(color));
            break;
    }
}

//when btn is clicked add a class of animation and remove it
function animatePress(currentColour){
    $(currentColour).addClass("pressed");
    setTimeout(function(){
        $(currentColour).removeClass("pressed");
    }, 100);
}


//when click do this
$(".btn").on("click", function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    makeSounds(userChosenColour);
    animatePress("." + userChosenColour);

    checkAnswer();

});

$("body").on("keypress", function(){
    if (!started){
        nextSequence();
        started = true;
    }
});

// Restart the game and restart all the variables.
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(){
    var lastAnswerPositon = (userClickedPattern.length) - 1;
    var lastAnswer = userClickedPattern[lastAnswerPositon];


    if (lastAnswer === gamePattern[lastAnswerPositon]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            }, 1000);
            console.log("ok");
        }
    }
    else{
        makeSounds("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key To Restart")
        startOver();
    }
}