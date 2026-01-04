const mechanics = document.querySelector(".mechanics");
const body = document.querySelector(".body");
const play_button = document.querySelector(".play-button");
const start_button = document.querySelector(".start-button");
const get_order = document.querySelector(".get-order");
const prepare_order = document.querySelector(".prepare-order");
const cashier = document.querySelector(".cashier");
const menu = document.querySelector(".menu");
const title_order = document.querySelector(".title-order");



start_button.addEventListener("click", () => {

    document.getElementById("audio").play();

    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#ff0000";
    start_button.style.display = "none";

    mechanics.style.display = "flex";
});

play_button.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/customer1.jpg')";

    get_order.style.display = "block";
});

get_order.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/customer1.jpg')";

    cashier.style.display = "block";

    get_order.style.display = "none";
}); 

prepare_order.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "block";
}); 