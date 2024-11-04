let generatedNumbers = new Set();
let minRange, maxRange;

function generateNumber() {
  minRange = parseInt(document.getElementById("minRange").value);
  maxRange = parseInt(document.getElementById("maxRange").value);
  const message = document.getElementById("message");
  message.innerText = "";

  // Validation for input range
  if (isNaN(minRange) || isNaN(maxRange)) {
    message.innerText = "Please enter valid numbers.";
    return;
  }
  if (minRange >= maxRange) {
    message.innerText = "Max must be greater than Min.";
    return;
  }

  // Check if all numbers in the range are generated
  if (generatedNumbers.size >= maxRange - minRange + 1) {
    message.innerText = "All numbers in range have been generated!";
    return;
  }

  // Generate a unique random number
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  } while (generatedNumbers.has(randomNumber));

  // Store and display the new number
  generatedNumbers.add(randomNumber);
  displayGeneratedNumbers();
}

function displayGeneratedNumbers() {
  const numberList = document.getElementById("numberList");
  numberList.innerHTML = Array.from(generatedNumbers).join(", ");
}

function resetGame() {
  generatedNumbers.clear();
  document.getElementById("minRange").value = "";
  document.getElementById("maxRange").value = "";
  document.getElementById("message").innerText = "";
  document.getElementById("numberList").innerHTML = "";
}
