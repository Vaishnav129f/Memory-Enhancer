
var highscore = 0;
var yourScore = 0;
$("#your-score").text("Your Score: " + yourScore);
$("#highscore").text("Highscore: " + highscore);

var buttonColours = ["red", "blue", "green", "yellow", "orange", "purple"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      if (userClickedPattern.length > highscore) {
        highscore = userClickedPattern.length;
        $("#highscore").text("Highscore: " + highscore);
      }
      yourScore = userClickedPattern.length; // Update user's score
      $("#your-score").text("Your Score: " + yourScore);
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over Champ, Press Start button/Any Key  to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 6);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  //yourScore = 0;
  gamePattern = [];
  started = false;
  $("#your-score").text("Your Score: " + yourScore); // Reset user's score display
}

$(document).ready(function () {
    $("#start-button").click(function () {
      startGame();
    });
  
    $(document).keypress(function (event) {
      if (event.key === 'Enter') { // Change to the appropriate key code if needed
        startGame();
      }
    });
    $("#rules-button").click(function () {
      $("#rules-modal").css("display", "block");
    });
  
    // Hide rules modal when close button or outside modal is clicked
    $(".close").click(function () {
      $("#rules-modal").css("display", "none");
    });
  
    $(window).click(function (event) {
      if (event.target == document.getElementById("rules-modal")) {
        $("#rules-modal").css("display", "none");
      }
    });
  });
  
  function startGame() {
    
    yourScore = 0;
    $("#your-score").text("Your Score: " + yourScore);
    $("#highscore").text("Highscore: " + highscore);
  
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;
  
    $("#level-title").text("Level " + level);
    nextSequence();
  }

/*var highscore = 0;
var yourScore = 0;
$("#your-score").text("Your Score: " + yourScore);
$("#highscore").text("Highscore: " + highscore);

var buttonColours = ["red", "blue", "green", "yellow", "orange", "purple"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      if (userClickedPattern.length > highscore) {
        highscore = userClickedPattern.length;
        $("#highscore").text("Highscore: " + highscore);
      }
      yourScore = userClickedPattern.length; // Update user's score
      $("#your-score").text("Your Score: " + yourScore);
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 6);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  //yourScore = 0;
  gamePattern = [];
  started = false;
  $("#your-score").text("Your Score: " + yourScore); // Reset user's score display
}*/