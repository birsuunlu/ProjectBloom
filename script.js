let display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendDot() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateDisplay();
}

function toggleSign() {
  currentNumber = currentNumber.startsWith("-")
    ? currentNumber.slice(1)
    : "-" + currentNumber;
  updateDisplay();
}



function percentage() {
  if (currentNumber === "" || isNaN(parseFloat(currentNumber))) {
    currentNumber = "0"; 
  } else {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
  }
  updateDisplay();
}


function setOperator(op) {
  if (currentNumber === "") return;
  if (previousNumber !== "") calculateResult();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculateResult() {
  if (operator === null || currentNumber === "") return;
  let result = 0;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
  }

  currentNumber = result.toString();
  operator = null;
  previousNumber = "";
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentNumber || "0";
}



function toggleOptions() {
  var optionsBox = document.getElementById("optionsBox");
  var backdrop = document.getElementById("backdrop");
  
  if (optionsBox.style.display === "none" || optionsBox.style.display === "") {
    optionsBox.style.display = "block"; 
    backdrop.style.display = "block"; 
    setTimeout(function() {
      backdrop.style.opacity = 1; 
    }, 10);
  } else {
    optionsBox.style.display = "none"; 
    backdrop.style.opacity = 0; 
    setTimeout(function() {
      backdrop.style.display = "none"; 
    }, 300); 
  }
}

document.getElementById('backdrop').addEventListener('click', function() {
  var optionsBox = document.getElementById("optionsBox");
  var backdrop = document.getElementById("backdrop");

  optionsBox.style.display = "none";
  backdrop.style.opacity = 0;
  
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 300); 
});
