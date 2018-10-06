class CarModifications {
    constructor() {
        // get elements for changing color car
        this.colorCarDropDown = document.querySelector("#color-car");
        this.carBody = document.querySelector(".car__body");
        this.leftWindow = document.querySelector(".car__top__window--left");
        this.rightWindow = document.querySelector(".car__top__window--right");

        // get elements for changing color rims
        this.colorRimsDropDown = document.querySelector("#color-rims");
        this.rims = document.querySelectorAll(".car__bottom__wheel");

        // get element for changing color windows
        this.lightColorWindowsRadioButton = document.querySelector("#light-color");
        this.darkColorWindowsRadioButton = document.querySelector("#dark-color");

        // get element for changing and hiding carnumber
        this.showNumberRadioButton = document.querySelector("#show-number");
        this.hideNumberRadioButton = document.querySelector("#hide-number");
        this.carNumberInput = document.querySelector("#change-number");
        this.carNumber = document.querySelector(".car__body__number");

        // reset page using reset button
        this.resetButton = document.querySelector("#reset");
        this.carLogo = document.querySelector(".car__logo");

        this.events();
    }

    events() {
        this.colorCarDropDown.addEventListener("change", this.changeColorCar.bind(this)); 
        this.colorRimsDropDown.addEventListener("change", this.changeColorRims.bind(this));
        this.lightColorWindowsRadioButton.addEventListener("change", this.changeColorWindowGlass.bind(this));
        this.darkColorWindowsRadioButton.addEventListener("change", this.changeColorWindowGlass.bind(this));
        this.showNumberRadioButton.addEventListener("change", this.toggleCarNumber.bind(this));
        this.hideNumberRadioButton.addEventListener("change", this.toggleCarNumber.bind(this));
        this.carNumberInput.addEventListener("input", this.changeCarNumber.bind(this));
        this.resetButton.addEventListener("click", this.resetPage.bind(this));
    }

    // to change color windowborders and body together, changeColorBody and changeColorWindowBorders
    changeColorCar() {
        let carColor = this.colorCarDropDown.options[this.colorCarDropDown.selectedIndex].value;
        this.changeColorBody(carColor);
        this.changeColorWindowBorders(carColor);
    }

    changeColorBody(carColor) {
        this.carBody.style.backgroundColor = carColor;
    }

    changeColorWindowBorders(carColor) {
        this.leftWindow.style.borderColor = carColor;
        this.rightWindow.style.borderColor = carColor;
    }

    changeColorRims() {
        let rimsColor = this.colorRimsDropDown.options[this.colorRimsDropDown.selectedIndex].value;
        this.rims.forEach(rim => rim.style.backgroundColor = rimsColor);
    }

    changeColorWindowGlass() {
        if(this.lightColorWindowsRadioButton.checked) {
            this.leftWindow.style.backgroundColor = "#d0ecfdcc";
            this.rightWindow.style.backgroundColor = "#d0ecfdcc";
        } else if (this.darkColorWindowsRadioButton.checked) {
            this.leftWindow.style.backgroundColor = "#071524cc";
            this.rightWindow.style.backgroundColor = "#071524cc";
        }
    }

    toggleCarNumber() {
        if(this.showNumberRadioButton.checked) {
            this.carNumber.classList.remove("car__body__number--invisible");
        } else {
            this.carNumber.classList.add("car__body__number--invisible");
        }
    }

    changeCarNumber() {
        this.validatNumberInput();
        this.carNumber.innerHTML = this.carNumberInput.value;
    }

    validatNumberInput() {
        const MAX_CHARS = 2;

        if (this.carNumberInput.value.length > MAX_CHARS) {
            this.carNumberInput.value = this.carNumberInput.value.substr(0, MAX_CHARS);
        }

        if (this.carNumberInput.value < 0) {
            console.log(this);
            this.carNumberInput.value = '';
        }
    }

    resetPage() {
        this.changeColorBody("#faed87");
        this.changeColorWindowBorders("#faed87");
        this.rims.forEach(rim => rim.style.backgroundColor = "#555");
        this.leftWindow.style.backgroundColor = "#d0ecfdcc";
        this.rightWindow.style.backgroundColor = "#d0ecfdcc";
        this.carNumber.classList.remove("car__body__number--invisible");
        this.carNumber.innerHTML = "12";
        this.carLogo.classList.add("car__logo--invisible");
    }

    
}

export default CarModifications;