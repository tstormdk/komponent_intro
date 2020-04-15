const whopper = document.getElementById("ikonx");
// const span = document.querySelectorAll(".burger-box span");

whopper.addEventListener("click", menuRollOut);

function menuRollOut() {
    const navBox = document.querySelector(".menu");
    navBox.classList.toggle("visible");
}