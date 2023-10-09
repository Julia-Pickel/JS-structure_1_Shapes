import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
console.clear();

const root = document.getElementById("root");

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
