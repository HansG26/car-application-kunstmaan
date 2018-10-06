class FetchAPI {
    constructor() {
        this.makeDropDown = document.querySelector("#make-car");
        this.carLogo = document.querySelector(".car__logo");
        this.events();
    }

    events() {
        this.makeDropDown.addEventListener("change", this.displayLogo.bind(this));
    }

    // fetch relevant logo from REST API using index inside JSON object
    displayLogo() {
        this.carLogo.classList.remove("car__logo--invisible"); // make logo visibile again in case reset occured
        var index = this.makeDropDown.selectedIndex - 1; // -1, want to count for index of disabled option 'select make'
        fetch('https://car-api.firebaseio.com/rest.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(carBrands) {
            let html = `<img src="${carBrands[index].logoUrl}" alt="logo of ${carBrands[index].make}">`;
            document.querySelector(".car__logo").innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
    }


}

export default FetchAPI;

