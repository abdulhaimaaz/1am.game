// let tableDiv = document.getElementById("game-container");


/**
 * It will create Table 10x10 table with random elements from 1-100
 */
// function createTable() {
//   let tbody = document.createElement("tbody");
//   let cellData = createCellData();

//   let counter = 0;
//   for (let i = 1; i <= 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 1; j <= 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = cellData[counter];
//       td.setAttribute("id", cellData[counter]);
//       td.addEventListener("click", checkMultiple);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.appendChild(tbody);
// }

// createTable();

/**
 * @createCellData/
 * Create Array to Store 1-100
 */

// function createCellData() {
//   let cellData = new Array(100);
//   for (let i = 0; i < 100; i++) {
//     cellData[i] = i + 1;
//   }

  // Shuffle the Array Elements
//   cellData = cellData.sort(() => Math.random() - 0.5);
//   return cellData;
// }

/**
 * Checks Multiple of a Number when clicked and converts all the multiples into ** or different Color.
 */
// function checkMultiple(e) {
//   // console.log(e.target.innerText);
//   playMusic('/DOM/Game/audio/clickAudio.mp3');
//   let num = e.target.id;
//   for (let i = 1; i <= 100; i++) {
//     if (+document.getElementById(i).innerText % num == 0) {
      // document.getElementById(i).style.backgroundColor = "black";
//       document.getElementById(i).innerHTML = `<img src="/DOM/Game/img/brick.jpg"/>`;
//     }
//   }
//   if (num == 1) {
//     alert("You win!");
//   }
// }

// This Function triggers Audio Files when called.
// function playMusic(fileName){
//   let clickAudio = new Audio(fileName);
//   clickAudio.play();
// }

/**
 * Create 10x10 table with numbers 1–100 shuffled
 */




// function createTable() {
//   let tbody = document.createElement("tbody");
//   let cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = cellData[counter];
//       td.setAttribute("id", cellData[counter]);
//       td.addEventListener("click", checkMultiple);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = ""; // clear old board if restarting
//   table.appendChild(tbody);
// }

// createTable();

// /**
//  * Generate numbers 1–100 and shuffle
//  */
// function createCellData() {
//   let cellData = [];
//   for (let i = 1; i <= 100; i++) {
//     cellData.push(i);
//   }
//   // Shuffle
//   return cellData.sort(() => Math.random() - 0.5);
// }

// /**
//  * When a number is clicked
//  */
// function checkMultiple(e) {
//   let num = parseInt(e.target.innerText);

//   for (let i = 1; i <= 100; i++) {
//     let cell = document.getElementById(i);
//     if (cell && parseInt(cell.innerText) % num === 0) {
//       cell.innerHTML = `<img src="/DOM/Game/img/brick.jpg"/>`;
//     }
//   }

//   if (num === 1) {
//     e.target.style.backgroundColor = "#00c853";
//     e.target.style.color = "#fff";
//     setTimeout(() => {
//       alert("1AM! You win!");
//     }, 200);
//   }
// }

// let score = 0;
// let gameOver = false;

// function createTable() {
//   let tbody = document.createElement("tbody");
//   let cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = cellData[counter];
//       td.setAttribute("id", "cell-" + cellData[counter]); // unique IDs
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   // reset state
//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("");
// }

// function createCellData() {
//   let cellData = [];
//   for (let i = 1; i <= 100; i++) {
//     cellData.push(i);
//   }
//   return cellData.sort(() => Math.random() - 0.5);
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let num = parseInt(e.target.innerText);
//   score++;
//   updateScore();

//   if (num === 1) {
//     e.target.style.backgroundColor = "#00c853";
//     e.target.style.color = "#fff";
//     gameOver = true;
//     showMessage(`🎉 You found 1 in ${score} clicks!`);
//   } else {
//     e.target.style.backgroundColor = "#d32f2f";
//     e.target.style.color = "#fff";
//     gameOver = true;
//     showMessage(`❌ That’s not 1. Try again! Score: ${score}`);
//   }
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// // Attach restart listener only after DOM is ready
// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable(); // start game
// };


// let score = 0;
// let gameOver = false;

// function createTable() {
//   let tbody = document.createElement("tbody");
//   let cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = cellData[counter];
//       td.setAttribute("id", "cell-" + cellData[counter]);
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   // reset
//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("");
// }

// function createCellData() {
//   let cellData = [];
//   for (let i = 1; i <= 100; i++) {
//     cellData.push(i);
//   }
//   return cellData.sort(() => Math.random() - 0.5);
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let num = parseInt(e.target.innerText);

//   // prevent clicking same cell multiple times
//   if (e.target.classList.contains("clicked")) return;

//   e.target.classList.add("clicked");
//   score++;
//   updateScore();

//   if (num === 1) {
//     e.target.style.backgroundColor = "#00c853";
//     e.target.style.color = "#fff";
//     gameOver = true;
//     showMessage(`🎉 You found 1 in ${score} clicks!`);
//   } else {
//     e.target.style.backgroundColor = "#d32f2f";
//     e.target.style.color = "#fff";
//     showMessage("Keep searching...");
//   }
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable();
// };


// let score = 0;
// let gameOver = false;
// let cellData = []; // keep numbers for reveal

// function createTable() {
//   let tbody = document.createElement("tbody");
//   cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = ""; // hide numbers at start
//       td.dataset.value = cellData[counter]; // store the real number secretly
//       td.setAttribute("id", "cell-" + cellData[counter]);
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   // reset
//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("Find the hidden 1!");
// }

// function createCellData() {
//   let arr = [];
//   for (let i = 1; i <= 100; i++) {
//     arr.push(i);
//   }
//   return arr.sort(() => Math.random() - 0.5);
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let cell = e.target;
//   let num = parseInt(cell.dataset.value);

//   if (cell.classList.contains("clicked")) return;

//   cell.classList.add("clicked");
//   score++;
//   updateScore();

//   // reveal the real number
//   cell.innerText = num;

//   if (num === 1) {
//     cell.style.backgroundColor = "#00c853";
//     cell.style.color = "#fff";
//     gameOver = true;
//     showMessage(`🎉 You found 1 in ${score} clicks!`);
//   } else {
//     cell.style.backgroundColor = "#d32f2f";
//     cell.style.color = "#fff";
//     showMessage("Keep searching...");
//   }
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable();
// };


// let score = 0;
// let gameOver = false;
// let cellData = [];

// function createTable() {
//   let tbody = document.createElement("tbody");
//   cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = "";
//       td.dataset.value = cellData[counter];
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("Click wisely: 1 wins, primes 2–30 lose!");
// }

// function createCellData() {
//   let arr = [];
//   for (let i = 1; i <= 100; i++) arr.push(i);
//   return arr; // no shuffle, straight 1–100 grid
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let cell = e.target;
//   let num = parseInt(cell.dataset.value);

//   if (cell.classList.contains("clicked")) return;

//   cell.classList.add("clicked");
//   score++;
//   updateScore();

//   if (num === 1) {
//     revealCell(cell, "win");
//     gameOver = true;
//     showMessage(" WOW You found 1.");
//   } else if (isPrime(num) && num <= 30) {
//     revealCell(cell, "lose");
//     gameOver = true;
//     showMessage(`💥 Game over! You clicked a prime (${num}).`);
//   } else if (num <= 30) {
//     revealMultiples(num);
//     showMessage(`Safe! You revealed multiples of ${num}.`);
//   } else {
//     revealCell(cell, "safe");
//     showMessage(`Revealed ${num}. Keep going...`);
//   }
// }

// function revealMultiples(n) {
//   let cells = document.querySelectorAll("td");
//   cells.forEach(c => {
//     let val = parseInt(c.dataset.value);
//     if (val % n === 0) {
//       revealCell(c, "safe");
//     }
//   });
// }

// function revealCell(cell, type) {
//   let num = parseInt(cell.dataset.value);
//   cell.innerText = num;

//   if (type === "win") {
//     cell.style.backgroundColor = "#00c853";
//     cell.style.color = "#fff";
//   } else if (type === "lose") {
//     cell.style.backgroundColor = "#d32f2f";
//     cell.style.color = "#fff";
//   } else if (type === "safe") {
//     cell.style.backgroundColor = "#1976d2";
//     cell.style.color = "#fff";
//   }
// }

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable();
// };


// let score = 0;
// let gameOver = false;
// let cellData = [];

// function createTable() {
//   let tbody = document.createElement("tbody");
//   cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = "";
//       td.dataset.value = cellData[counter];
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("Click wisely: 1 wins, primes 2–30 lose!");
// }

// function createCellData() {
//   let arr = [];
//   for (let i = 1; i <= 100; i++) arr.push(i);
//   // shuffle array
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let cell = e.target;
//   let num = parseInt(cell.dataset.value);

//   if (cell.classList.contains("clicked")) return;

//   cell.classList.add("clicked");
//   score++;
//   updateScore();

//   if (num === 1) {
//     revealCell(cell, "win");
//     gameOver = true;
//     showMessage("kyaa baat hai You win!");
//   } else if (isPrime(num) && num <= 30) {
//     revealCell(cell, "lose");
//     gameOver = true;
//     showMessage(`💥 Game over! You clicked a prime (${num}).`);
//   } else if (num <= 30) {
//     revealMultiples(num);
//     showMessage(`Safe! You revealed multiples of ${num}.`);
//   } else {
//     revealCell(cell, "safe");
//     showMessage(`Revealed ${num}. Keep going...`);
//   }
// }

// function revealMultiples(n) {
//   let cells = document.querySelectorAll("td");
//   cells.forEach(c => {
//     let val = parseInt(c.dataset.value);
//     if (val % n === 0) {
//       revealCell(c, "safe");
//     }
//   });
// }

// function revealCell(cell, type) {
//   let num = parseInt(cell.dataset.value);
//   cell.innerText = num;

//   if (type === "win") {
//     cell.style.backgroundColor = "#00c853";
//     cell.style.color = "#fff";
//   } else if (type === "lose") {
//     cell.style.backgroundColor = "#d32f2f";
//     cell.style.color = "#fff";
//   } else if (type === "safe") {
//     cell.style.backgroundColor = "#1976d2";
//     cell.style.color = "#fff";
//   }
// }

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable();
// };


// let score = 0;
// let gameOver = false;
// let cellData = [];

// function createTable() {
//   let tbody = document.createElement("tbody");
//   cellData = createCellData();

//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//       let td = document.createElement("td");
//       td.innerText = "";
//       td.dataset.value = cellData[counter];
//       td.addEventListener("click", checkNumber);
//       tr.appendChild(td);
//       counter++;
//     }
//     tbody.appendChild(tr);
//   }

//   let table = document.getElementById("myTable");
//   table.innerHTML = "";
//   table.appendChild(tbody);

//   score = 0;
//   gameOver = false;
//   updateScore();
//   showMessage("Find the hidden 1. Avoid primes for higher chance!");
// }

// function createCellData() {
//   let arr = [];
//   for (let i = 1; i <= 100; i++) arr.push(i);
//   // shuffle array
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// function checkNumber(e) {
//   if (gameOver) return;

//   let cell = e.target;
//   let num = parseInt(cell.dataset.value);

//   if (cell.classList.contains("clicked")) return;

//   cell.classList.add("clicked");
//   score++;
//   updateScore();

//   if (num === 1) {
//     revealCell(cell, "win");
//     gameOver = true;
//     showMessage("You  win!");
//   } else if (isPrime(num) && num <= 30) {
//     revealCell(cell, "prime");
//     showMessage(`❌ ${num} is a prime. Keep searching...`);
//   } else if (num <= 30) {
//     revealMultiples(num);
//     showMessage(`Safe! You revealed multiples of ${num}.`);
//   } else {
//     revealCell(cell, "safe");
//     showMessage(`Revealed ${num}. Keep going...`);
//   }
// }

// function revealMultiples(n) {
//   let cells = document.querySelectorAll("td");
//   cells.forEach(c => {
//     let val = parseInt(c.dataset.value);
//     if (val % n === 0) {
//       revealCell(c, "safe");
//     }
//   });
// }

// function revealCell(cell, type) {
//   let num = parseInt(cell.dataset.value);
//   cell.innerText = num;

//   if (type === "win") {
//     cell.style.backgroundColor = "#00c853"; // green
//     cell.style.color = "#fff";
//   } else if (type === "prime") {
//     cell.style.backgroundColor = "#d32f2f"; // red
//     cell.style.color = "#fff";
//   } else if (type === "safe") {
//     cell.style.backgroundColor = "#1976d2"; // blue
//     cell.style.color = "#fff";
//   }
// }

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function updateScore() {
//   document.getElementById("score").innerText = `Score: ${score}`;
// }

// function showMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

// window.onload = () => {
//   document.getElementById("restartBtn").addEventListener("click", createTable);
//   createTable();
// };

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const playerName = getQueryParam("playername") || "Player";
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("playerName").textContent = `Welcome ${playerName}!`;
  });

let err = new Audio('./audio/losing.wav');
let win = new Audio('./audio/win.wav');

// err.play()
let score = 0;
let gameOver = false;
let cellData = [];

function createTable() {
  let tbody = document.createElement("tbody");
  cellData = createCellData();

  let counter = 0;
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      let td = document.createElement("td");
      td.innerText = "";
      td.dataset.value = cellData[counter];
      td.addEventListener("click", checkNumber);
      tr.appendChild(td);
      counter++;
    }
    tbody.appendChild(tr);
  }

  let table = document.getElementById("myTable");
  table.innerHTML = "";
  table.appendChild(tbody);

  score = 0;
  gameOver = false;
  updateScore();
  showMessage("Find 1 to win. Click a prime (2-30) and the game ends!");
}

function createCellData() {
  let arr = [];
  for (let i = 1; i <= 100; i++) arr.push(i);
  // shuffle array
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function checkNumber(e) {
  if (gameOver) return;

  let cell = e.target;
  let num = parseInt(cell.dataset.value);

  if (cell.classList.contains("clicked")) return;

  cell.classList.add("clicked");
  score++;
  updateScore();

  if (num === 1) {
    revealCell(cell, "win");
    gameOver = true;
    showMessage("You win!");
    win.play()
    revealAll(); // optional: show the whole board when you win
  } else if (isPrime(num) && num <= 30) {
    err.play()
    revealCell(cell, "lose");
    gameOver = true;
    showMessage(`Game over! You clicked a prime (${num}).`);
    revealAll();
  } else if (num <= 30) {
    revealMultiples(num);
    showMessage(`Safe! You revealed multiples of ${num}.`);
  } else {
    revealCell(cell, "safe");
    showMessage(`Revealed ${num}. Keep going...`);
  }
}

function revealMultiples(n) {
  let cells = document.querySelectorAll("td");
  cells.forEach(c => {
    let val = parseInt(c.dataset.value);
    if (val % n === 0) {
      revealCell(c, "safe");
    }
  });
  // err.play()
}

function revealAll() {
  let cells = document.querySelectorAll("td");
  cells.forEach(c => {
    let val = parseInt(c.dataset.value);
    if (!c.classList.contains("clicked")) {
      if (val === 1) {
        revealCell(c, "win");
      } else if (isPrime(val) && val <= 30) {
        revealCell(c, "lose");
      } else if (val <= 30) {
        revealCell(c, "safe");
      } else {
        revealCell(c, "neutral");
      }
    }
  });
}

function revealCell(cell, type) {
  let num = parseInt(cell.dataset.value);
  cell.innerText = num;

  if (type === "win") {
    cell.style.backgroundColor = "#00c853"; // green
    cell.style.color = "#fff";
  } else if (type === "lose") {
    cell.style.backgroundColor = "#d32f2f"; // red
    cell.style.color = "#fff";
  } else if (type === "safe") {
    cell.style.backgroundColor = "#1976d2"; // blue
    cell.style.color = "#fff";
  } else if (type === "neutral") {
    cell.style.backgroundColor = "#9e9e9e"; // gray
    cell.style.color = "#fff";
  }
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function updateScore() {
  document.getElementById("score").innerText = `Score: ${score}`;
}

function showMessage(msg) {
  document.getElementById("message").innerText = msg;
}

window.onload = () => {
  document.getElementById("restartBtn").addEventListener("click", createTable);
  createTable();
};
