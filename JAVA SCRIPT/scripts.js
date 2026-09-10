const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectFrom = document.querySelector (".currency-select-from")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const cotacoes = {
        brasil: 1,
        dolar: 5.2,
        Euro: 6.2,
        Libra: 6.8,
        DES: 7.22
    }

    const moedaOrigem = currencySelectFrom.value
    const moedaDestino = currencySelect.value

    const valorEmReal = inputCurrencyValue * cotacoes[moedaOrigem]
    const resultado = valorEmReal / cotacoes[moedaDestino]

    currencyValueToConvert.innerHTML = formatCurrency (inputCurrencyValue, moedaOrigem)
    currencyValueConverted.innerHTML = formatCurrency (resultado, moedaDestino)
}

function formatCurrency(valor, moeda){

    if (moeda === "brasil") {

        return new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) .format(valor)
    }

    if (moeda === "dolar") {

        return new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }) .format(valor)
    }

    if (moeda === "Euro") {

        return new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }) .format(valor)

    }

    if (moeda === "Libra") {

        return new Intl.NumberFormat ("en-GB", {
            style: "currency",
            currency: "GBP"
        }) .format(valor)
    }

    if (moeda === "Bitcoin"){
        
        return "₿" + Number(valor).toFixed (8)

    }

    if (moeda === "DES"){
        
        return Number(valor).toFixed (2) + "DES"
    }

}

function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")

        if(currencySelect.value == "brasil"){
            currencyName.innerHTML = "Real"
            currencyImg.src = "./assets/brasil.png"
        }
        
        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dolar americano"
            currencyImg.src = "./assets/usa.png"
        }

        if(currencySelect.value == "Euro"){
            currencyName.innerHTML = "Euro"
            currencyImg.src = "./assets/euro.png"
        }

        if(currencySelect.value == "Libra"){
            currencyName.innerHTML = "Libra"
            currencyImg.src = "./assets/libra.png"
        }

        if (currencySelect.value == "Bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImg.src = "./assets/bitcoin.png"
        }

        if(currencySelect.value == "DES"){
            currencyName.innerHTML = "Direitos especiais de saque (DES)";
            currencyImg.src = "./assets/des.png";
        }

    convertValues()

}

function changeCurrencyFrom() {
    const currencyNameFrom = document.querySelector(".currency-name-to-convert")
    const currencyImgFrom = document.querySelector(".currency-img-to-convert")

        if (currencySelectFrom.value === "brasil"){
            currencyNameFrom.innerHTML = "Real"
            currencyImgFrom.src = "./assets/brasil.png"
        }

        if(currencySelectFrom.value == "dolar"){
            currencyNameFrom.innerHTML = "Dolar americano"
            currencyImgFrom.src = "./assets/usa.png"
        }

        if(currencySelectFrom.value == "Euro"){
            currencyNameFrom.innerHTML = "Euro"
            currencyImgFrom.src = "./assets/euro.png"
        }

        if(currencySelectFrom.value == "Libra"){
            currencyNameFrom.innerHTML = "Libra"
            currencyImgFrom.src = "./assets/libra.png"
        }

        if (currencySelectFrom.value == "Bitcoin") {
            currencyNameFrom.innerHTML = "Bitcoin"
            currencyImgFrom.src = "./assets/bitcoin.png"
        }

        if(currencySelectFrom.value == "DES"){
            currencyNameFrom.innerHTML = "Direitos especiais de saque (DES)";
            currencyImgFrom.src = "./assets/des.png";
        }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
currencySelectFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)