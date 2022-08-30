var lengthInput = document.getElementById("length").value;
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const symbolsInput = document.getElementById("symbols");
const numbersInput = document.getElementById("numbers");
const generatedPassword = document.getElementById("password");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%&'()*+,-./";

function getLowercase() {
  return lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));
}

function getUppercase() {
  return upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
}

function getNumbers() {
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function getSymbols() {
  return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

function changeLength() {
  lengthInput = document.getElementById("length").value;
  document.getElementById("length").setAttribute("value", lengthInput);
  document.getElementById("lengthValue").innerHTML = lengthInput;
}

function generatePassword() {
  let password = "";
  for (let i = 0; i < lengthInput; i++) {
    const x = generateX();
    password += x;
  }
  generatedPassword.innerHTML = password;
}

function generateX() {
  const xs = [];
  if (uppercaseInput.checked) {
    xs.push(getUppercase());
  }
  if (lowercaseInput.checked) {
    xs.push(getLowercase());
  }
  if (symbolsInput.checked) {
    xs.push(getSymbols());
  }
  if (numbersInput.checked) {
    xs.push(getNumbers());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

function getPassword(text) {
  navigator.clipboard.writeText(text.innerHTML);
}
