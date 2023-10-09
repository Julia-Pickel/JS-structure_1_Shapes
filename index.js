import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

// Circle
function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor(); // hier wichtig: Funktion aufrufen ...() und Klammern nicht vergessen !
  });
  return circle;
}
const rootElement = document.getElementById("root");
const circleElement = Circle();
rootElement.appendChild(circleElement);

// Square
function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor(); // hier wichtig: Funktion aufrufen ...() und Klammern nicht vergessen !
  });
  return square;
}
const squareElement = Square();
rootElement.appendChild(squareElement);

// Pentagon
function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor(); // hier wichtig: Funktion aufrufen ...() und Klammern nicht vergessen !
  });
  return pentagon;
}

const pentagonElement = Pentagon();
rootElement.appendChild(pentagonElement);
