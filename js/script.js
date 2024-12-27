const text = "Oscar Cheung.";
let index = 0;
const caret = document.getElementById("caret");

function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 160);
    } else {
        caret.style.display = "none";
    }
}

window.onload = () => {
    type();
};
