const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhooh");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

//validate CEP input
cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    //allow only numbers
    if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
});

// Get address event
cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;

    //check if we have the correct length
    if(inputValue.lenght === 8) {
        getAddress(inputValue);
    }
})

// Get customer address from API
const getAddress = async (cep) => {
    console.log(cep);
    toggleLoader();
}

// Show or hide loader
const toggleLoader = () => {
    const fadeElement = document.querySelector("#fade");
    const loaderElement = document.querySelector("#loader");

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");
};