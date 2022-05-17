const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// let menuOpen = false;
// hamburger.addEventListener("click", () => {
//     if (menuOpen){
//         hamburger.classList.add('open');
//         menuOpen=true;
//     } else{
//         hamburger.classList.remove('open');
//         menuOpen=false;
//     }
// });

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))