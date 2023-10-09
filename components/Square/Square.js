// Square
import { getRandomColor } from "../../utils/randomColor.js";

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor(); // hier wichtig: Funktion aufrufen ...() und Klammern nicht vergessen !
  });
  return square;
}
const rootElement = document.getElementById("root");
const squareElement = Square();
rootElement.appendChild(squareElement);

export { Square };
