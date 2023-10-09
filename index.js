import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
console.clear();

const root = document.getElementById("root");

// Square
function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor(); // hier wichtig: Funktion aufrufen ...() und Klammern nicht vergessen !
  });
  return square;
}
// const rootElement = document.getElementById("root");
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
// const rootElement = document.getElementById("root");
const pentagonElement = Pentagon();
rootElement.appendChild(pentagonElement);
