console.log("Witaj przyjacielu!");

let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = plnElement.value;
    let currency = currencyElement.value;
    let EUR = 4.68;
    let USD = 4.46;
    let GBT = 5.45;
    let result;

    switch (currency) {
        case "EUR":
            result = pln / EUR;
            break;
        case "USD":
            result = pln / USD;
            break;
        case "GBT":
            result = pln / GBT;
    }

resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});

