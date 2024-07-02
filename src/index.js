const button = document.getElementById("colorButton");
const historyList = document.getElementById("history");
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF3"];
let clickCount = 0;
const maxClicks = 5;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
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
