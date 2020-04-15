const whopper = document.getElementById("ikonx");

// const span = document.querySelectorAll(".burger-box span");

whopper.addEventListener("click", menuRollOut);
// window.addEventListener('resize', RemoveClass);

function menuRollOut() {
    const navBox = document.querySelector(".menu");
    navBox.classList.toggle("visible");
}

function RemoveClass(){
    const navBox = document.querySelector(".menu");
    let sizeStuf = window.innerWidth;
    if (sizeStuf < 500 && sizeStuf > 490) {
        // console.log("sizeStuf");
        navBox.classList.remove("menu");
    }
    // const widthOutput = document.querySelector('body');
    // const navBox = document.querySelector(".menu");    
    // widthOutput = window.innerWidth;
    // if (widthOutput < 600) {
    //     navBox.classList.remove("menu");
    // }
    
}


// element.classList.remove("mystyle");