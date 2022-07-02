{
    const CalculateResult = (pln, currency) => {
        const EUR = 4.7176;
        const USD = 4.5106;
        const GBP = 5.4583;

        switch (currency) {
            case "EUR":
                return pln / EUR;
            case "USD":
                return pln / USD;
            case "GBP":
                return pln / GBP;
        }
    }

    const updateResultText = (result, currency) => {
        let resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const pln = +plnElement.value;
        const currency = currencyElement.value;
       
        const result = CalculateResult(pln, currency);
        updateResultText(result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}