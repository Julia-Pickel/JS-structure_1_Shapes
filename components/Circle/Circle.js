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

export { Circle };
