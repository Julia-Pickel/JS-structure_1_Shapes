// Circle
import { getRandomColor } from "../../utils/randomColor.js";

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

export { Circle };

// alternativ kann man Zeile 16 vor function schreiben und
// Zeilen 12-14 in index.js schreiben als:

// const root = document.getElementbyId("root");
// const circle = Circle ();
// const square = Square ();
// const pentagon = Pentagon ();
// root.append(circle, square, pentagon);

// oder Zeile 21-24 weiter kürzen auf: root.append(Circle(), Square(), Pentagon());
