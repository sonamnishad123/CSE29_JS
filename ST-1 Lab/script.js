const heading = document.getElementById('main-heading');
const input = document.getElementById('heading-input');
const container = document.querySelector('.container');

function insertNew() {
    if (input.value.trim() !== "") {
        heading.innerText = input.value;
    }
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
    heading.innerText = "Javascript Event and Dom Manipulation";
    container.style.backgroundColor = "white";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    input.value = "";
    currentSize = 16;
}