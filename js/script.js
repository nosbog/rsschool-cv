const navButton = document.querySelector(".nav-button");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

navButton.addEventListener("click", () => {
    nav.classList.toggle("showNav")
})

navLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
        nav.classList.toggle("showNav")
    })
})
