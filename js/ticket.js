const allSeat = document.getElementsByClassName("all-btn");
let count = 0;
for (const singleseat of allSeat) {
  singleseat.addEventListener("click", function (event) {
    singleseat.classList.add("bg-green-500");
    // singleseat.classList.remove("bg-green-500");
    count = count + 1;
    const bookedSeat = document.getElementById("hide-previous");

    hidePrevious("hide-previous");
    setInnerText("seat-count", count);
  });
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function hidePrevious(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
