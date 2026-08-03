const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.8
    const bitcoinToday = 650000
    const DEStoday = 7.22

    if(currencySelect.value == "dolar") { // se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)

    }

    if(currencySelect.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }

    if(currencySelect.value == "Bitcoin"){
        
        const valorBitcoin = inputCurrencyValue/bitcoinToday
        
        currencyValueConverted.innerHTML ="₿ " + valorBitcoin.toFixed(8)

    }

    if(currencySelect.value == "DES"){
            const valorDES = inputCurrencyValue / DEStoday;

            currencyValueConverted.innerHTML = valorDES.toFixed(2) + " DES";
    }
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")
        
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
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)