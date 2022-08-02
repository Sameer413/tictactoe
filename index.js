var boxes = Array.from(document.getElementsByClassName("tile"));
var gamebtn = document.getElementById("btn");
var restart = document.getElementById("restart");
var O = document.getElementById("O");
var X = document.getElementById("X");
var enter = document.getElementById("winner");
var d = document.getElementById("d");
var player = "X";
// var count = 0

const winpat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

var recdat = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

boxes.forEach((element) => {
  element.addEventListener("click", () => {
    if (recdat[element.id] == "X" || recdat[element.id] == "O") {
      alert("Already filled");
    } else {
      console.log(recdat[element]);
      element.innerHTML = player;
      recdat[element.id] = player;
      //
      checksequence();
      switchTurn(player);
      console.log(recdat);
    //   Draw();
    }
  });
});

function switchTurn(e) {
  if (e == "X") {
    //
    X.classList.remove("turn");
    O.classList.add("turn");
    //
    player = "O";
    return;
  }
  player = "X";
  O.classList.remove("turn");
  X.classList.add("turn");
  Draw();
}

// temp is a arr from recdat 2D arr
function checksequence() {
  for (let i = 0; i < winpat.length; i++) {
    var temp = winpat[i];
    a = recdat[temp[0]];
    console.log(a)
    b = recdat[temp[1]];
    c = recdat[temp[2]];
    if ((a == b) & (b == c)) {
      end();
    }
  }
}
function Draw() {
  var count = 0;
  for (var i = 0; i < recdat.length; i++) {
    if (recdat[i] == "X" || recdat[i] == "O") {
      count += 1;
    }
  }
  if (count > 8) {
    d.innerHTML = "DRAW";
    end();
  }
}
function end() {
  document.getElementById("end").style.display = "flex";
  if (player == "X") {
    enter.innerHTML = "X";
  } else if (player == "O") {
    enter.innerHTML = "O";
  }
}

restart.addEventListener("click", () => {
  location.reload();
});
gamebtn.addEventListener("click", () => {
  location.reload();
});