class CarModifications {
    constructor() {
        // elements for changing color car
        this.colorCarDropDown = document.querySelector("#color-car");
        this.carBody = document.querySelector(".car__body");
        this.leftWindow = document.querySelector(".car__top__window--left");
        this.rightWindow = document.querySelector(".car__top__window--right");

        // elements for changing color rims
        this.colorRimsDropDown = document.querySelector(".car__bottom__wheel");

        this.events();
    }

    events() {
        this.colorCarDropDown.addEventListener("change", this.changeColorCar.bind(this));
        this.colorRimsDropDown.addEventListener("change", this.changeColorRims.bind(this));
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
}

export default CarModifications;