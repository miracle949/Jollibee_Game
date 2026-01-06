const mechanics = document.querySelector(".mechanics");
const body = document.querySelector(".body");
const play_button = document.querySelector(".play-button");
const start_button = document.querySelector(".start-button");
const get_order = document.querySelector(".get-order");
const prepare_order = document.querySelector(".prepare-order");
const cashier = document.querySelector(".cashier");
const menu = document.querySelector(".menu");
const title_order = document.querySelector(".title-order");

const bucketChicken = document.querySelector(".bucketChicken");
const Fries = document.querySelector(".Fries");
const cokeFloat = document.querySelector(".title-order");
const burgerFries = document.querySelector(".burgerFries");
const Spag = document.querySelector(".Spag");
const Peach = document.querySelector(".Peach");

const start_answer_group = document.querySelector(".start-answer-group");

const start_answer_group2 = document.querySelector(".start-answer-group2");

const start_answer_group3 = document.querySelector(".start-answer-group3");

const start_answer_group4 = document.querySelector(".start-answer-group4");

const start_answer_group5 = document.querySelector(".start-answer-group5");

const start_answer_group6 = document.querySelector(".start-answer-group6");

function formatTime(seconds) {
    return `00:${String(seconds).padStart(2, "0")}`;
}

function startTimer(duration, onFinish) {
    let count = duration;

    timer.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer.textContent = "Start";
            }
        }
    }, 1000);
}

function startTimer2(duration, onFinish) {
    let count = duration;

    timer2.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer2.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer2.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer2.textContent = "Start";
            }
        }
    }, 1000);
}

function startTimer3(duration, onFinish) {
    let count = duration;

    timer3.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer3.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer3.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer3.textContent = "Start";
            }
        }
    }, 1000);
}

function startTimer4(duration, onFinish) {
    let count = duration;

    timer4.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer4.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer4.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer4.textContent = "Start";
            }
        }
    }, 1000);
}

function startTimer5(duration, onFinish) {
    let count = duration;

    timer5.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer5.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer5.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer5.textContent = "Start";
            }
        }
    }, 1000);
}

function startTimer6(duration, onFinish) {
    let count = duration;

    timer6.textContent = formatTime(count);

    const interval = setInterval(() => {
        count--;
        timer6.textContent = formatTime(count);

        if (count === 0) {
            clearInterval(interval);
            timer6.textContent = "00:00";

            if (typeof onFinish === "function") {
                onFinish();

                timer6.textContent = "Start";
            }
        }
    }, 1000);
}


start_button.addEventListener("click", () => {

    // document.getElementById("audio").play();

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

// bucketChicken function

bucketChicken.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-bucket-chicken").style.display = "block";

    document.querySelector(".question-fries").style.display = "none";

    document.querySelector(".question-cokefloat").style.display = "none";

    document.querySelector(".question-burgerFries").style.display = "none";

    document.querySelector(".question-spaghetti").style.display = "none";

    document.querySelector(".question-peach-mango").style.display = "none";

});

document.querySelector(".exit").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-bucket-chicken").style.display = "none";
    
});

document.querySelector(".start-answer").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-bucket-chicken").style.display = "block";

    start_answer_group.style.marginLeft = "1rem";

    startTimer(10, () => {
       start_answer_group.style.marginLeft = "0";
    });
});

// Fries function

Fries.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-fries").style.display = "block";

    document.querySelector(".question-bucket-chicken").style.display = "none";

    document.querySelector(".question-cokefloat").style.display = "none";

    document.querySelector(".question-burgerFries").style.display = "none";

    document.querySelector(".question-spaghetti").style.display = "none";

    document.querySelector(".question-peach-mango").style.display = "none";
});

document.querySelector(".exit2").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-fries").style.display = "none";
});

document.querySelector(".start-answer2").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-fries").style.display = "block";

    start_answer_group2.style.marginLeft = "1rem";

    startTimer2(10, () => {
       start_answer_group2.style.marginLeft = "0";
    });
});

// CokeFloat

cokeFloat.addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-cokefloat").style.display = "block";

    document.querySelector(".question-bucket-chicken").style.display = "none";
});

document.querySelector(".exit2").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-fries").style.display = "none";
});

document.querySelector(".start-answer2").addEventListener("click", () => {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    start_button.style.display = "none";

    mechanics.style.display = "none";

    body.style.backgroundImage = "url('images/orderBg2.jpg')";

    cashier.style.display = "none";

    get_order.style.display = "none";

    menu.style.display = "flex";

    title_order.style.display = "flex";

    document.querySelector(".question-fries").style.display = "block";

    start_answer_group2.style.marginLeft = "1rem";

    startTimer2(10, () => {
       start_answer_group2.style.marginLeft = "0";
    });
});