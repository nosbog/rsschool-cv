const navButton = document.querySelector(".nav-button");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

navButton.addEventListener("click", () => {
    nav.classList.toggle("showNav")
    navButton.classList.toggle("nav-animation")
})

navLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
        nav.classList.toggle("showNav")
        navButton.classList.toggle("nav-animation")
    })
})


console.log(
    `Общий балл: 150
    1) верстка валидная: +10
    2) верстка семантическая: + 20 (header, nav, main, footer, time, article, section, h1, h2, h3)
    3) использовались css стили: +10
    4) контент центрирован: +10
    5) верстка адаптивная: +10
    6) адаптивное бургер-меню: +10
    7) изображения не искажено, с атрибутом alt: +10
    8) контакты для связи и навыки в ul>li: +10
    9) вся необходимая информация: +10
    10) пример кода с подсветкой (prism.js): +10
    11) правильно оформленные проекты: +10
    12) cv на английском: +10
    13) выполнены требования к pull request: +10
    14) видео-резюме (про его качество не было ни слова :D): +10
    15) дизайн - сойдет: +10`
    )