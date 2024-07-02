const button = document.getElementById("colorButton");
const historyList = document.getElementById("history");
const initialColors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF3"];
let colors = [...initialColors];
let clickCount = 0;
const maxClicks = 5;
// Copy the initial colors array

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors.splice(randomIndex, 1)[0];
}

function changeBackgroundColor() {
  if (clickCount < maxClicks) {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;

    const listItem = document.createElement("li");
    listItem.textContent = newColor;
    historyList.appendChild(listItem);

    clickCount++;
    if (clickCount === maxClicks) {
      button.disabled = true;
      button.textContent = "Oops! You have used up your 5 chances";
      button.style.width = "40rem";
    }
  }
}

button.addEventListener("click", changeBackgroundColor);
