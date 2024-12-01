setTimeout(makeUpUser, 1000);
function makeUpUser(){
    alert ('Добро пожаловать на сайт, желаю удачного шопинга!');
}

const button = document.getElementById("animateButton");

button.addEventListener("click", () => {
    // Добавляем класс анимации
    button.classList.add("animated");

    // Удаляем класс анимации через 300 мс
    setTimeout(() => {
        button.classList.remove("animated");
    }, 300);
});