// names

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let scoreYou = 0;
let scoreComputer = 0;
let winStreak = 0;

// event listeners
document.getElementById("rockBtn").addEventListener("click", selectRock);
document.getElementById("paperBtn").addEventListener("click", selectPaper);
document
  .getElementById("scissorsBtn")
  .addEventListener("click", selectScissors);

// event listener function
function selectRock() {
  img1.src = "images/rock.png";
  let random = (Math.random() * 3).toFixed();

  if (random == 1) {
    img2.src = "images/rock.png";
    document.getElementById("span1").innerHTML = "tied";
  } else if (random == 2) {
    img2.src = "images/paper.png";
    document.getElementById("span1").innerHTML = "lost";
    document.getElementById("scoreComputer").innerHTML = scoreComputer++;
    winStreak = 0;
    document.getElementById("span2").innerHTML = winStreak;
  } else {
    img2.src = "images/scissors.png";
    document.getElementById("span1").innerHTML = "won";
    document.getElementById("scoreYou").innerHTML = scoreYou++;
    winStreak++;
    document.getElementById("span2").innerHTML = winStreak;
  }
}

function selectPaper() {
  img1.src = "images/paper.png";
  let random = (Math.random() * 3).toFixed();
  if (random == 1) {
    img2.src = "images/rock.png";
    document.getElementById("span1").innerHTML = "won";
    document.getElementById("scoreYou").innerHTML = scoreYou++;
    winStreak++;
    document.getElementById("span2").innerHTML = winStreak;
  } else if (random == 2) {
    img2.src = "images/paper.png";
    document.getElementById("span1").innerHTML = "tied";
  } else {
    img2.src = "images/scissors.png";
    document.getElementById("span1").innerHTML = "lost";
    document.getElementById("scoreComputer").innerHTML = scoreComputer++;
    winStreak = 0;
    document.getElementById("span2").innerHTML = winStreak;
  }
}

function selectScissors() {
  img1.src = "images/scissors.png";
  let random = (Math.random() * 3).toFixed();
  if (random == 1) {
    img2.src = "images/rock.png";
    document.getElementById("span1").innerHTML = "lost";
    document.getElementById("scoreComputer").innerHTML = scoreComputer++;
    winStreak = 0;
    document.getElementById("span2").innerHTML = winStreak;
  } else if (random == 2) {
    img2.src = "images/paper.png";
    document.getElementById("span1").innerHTML = "won";
    document.getElementById("scoreYou").innerHTML = scoreYou++;
    winStreak++;
    document.getElementById("span2").innerHTML = winStreak;
  } else {
    img2.src = "images/scissors.png";
    document.getElementById("span1").innerHTML = "tied";
  }
}
