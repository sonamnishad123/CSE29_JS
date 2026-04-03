const heading = document.getElementById('main-heading');
const input = document.getElementById('heading-input');
const paragraph = document.getElementById('sample-text');
const container = document.querySelector('.container');

function changeHeading() {
    if (input.value.trim() !== "") {
        heading.innerText = input.value;
    }
}

function changeBackground() {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
    container.style.backgroundColor = randomColor;
}

let currentSize = 16;
function increaseFontSize() {
    currentSize += 2;
    paragraph.style.fontSize = currentSize + "px";
}

function toggleParagraph() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}
function resetPage() {
    heading.innerText = "Welcome to JavaScript Lab";
    container.style.backgroundColor = "white";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    input.value = "";
    currentSize = 16;
}