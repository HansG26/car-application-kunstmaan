/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FetchAPI = __webpack_require__(1);

var _FetchAPI2 = _interopRequireDefault(_FetchAPI);

var _CarModifications = __webpack_require__(2);

var _CarModifications2 = _interopRequireDefault(_CarModifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAPI = new _FetchAPI2.default();
var carModifications = new _CarModifications2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FetchAPI = function () {
    function FetchAPI() {
        _classCallCheck(this, FetchAPI);

        this.makeDropDown = document.querySelector("#make-car");
        this.events();
    }

    _createClass(FetchAPI, [{
        key: "events",
        value: function events() {
            this.makeDropDown.addEventListener("change", this.displayLogo.bind(this));
        }

        // fetch relevant logo from REST API using index inside JSON object

    }, {
        key: "displayLogo",
        value: function displayLogo() {
            var index = this.makeDropDown.selectedIndex - 1; // -1, want to count for index of disabled option 'select make'
            fetch('https://car-api.firebaseio.com/rest.json').then(function (response) {
                return response.json();
            }).then(function (carBrands) {
                var html = "<img src=\"" + carBrands[index].logoUrl + "\" alt=\"logo of " + carBrands[index].make + "\">";
                document.querySelector(".car__logo").innerHTML = html;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);

    return FetchAPI;
}();

exports.default = FetchAPI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarModifications = function () {
    function CarModifications() {
        _classCallCheck(this, CarModifications);

        // elements for changing color car
        this.colorCarDropDown = document.querySelector("#color-car");
        this.carBody = document.querySelector(".car__body");
        this.leftWindow = document.querySelector(".car__top__window--left");
        this.rightWindow = document.querySelector(".car__top__window--right");

        // elements for changing color rims
        this.colorRimsDropDown = document.querySelector(".car__bottom__wheel");

        this.events();
    }

    _createClass(CarModifications, [{
        key: "events",
        value: function events() {
            this.colorCarDropDown.addEventListener("change", this.changeColorCar.bind(this));
            this.colorRimsDropDown.addEventListener("change", this.changeColorRims.bind(this));
        }

        // to change color windowborders and body together, changeColorBody and changeColorWindowBorders

    }, {
        key: "changeColorCar",
        value: function changeColorCar() {
            var carColor = this.colorCarDropDown.options[this.colorCarDropDown.selectedIndex].value;
            this.changeColorBody(carColor);
            this.changeColorWindowBorders(carColor);
        }
    }, {
        key: "changeColorBody",
        value: function changeColorBody(carColor) {
            this.carBody.style.backgroundColor = carColor;
        }
    }, {
        key: "changeColorWindowBorders",
        value: function changeColorWindowBorders(carColor) {
            this.leftWindow.style.borderColor = carColor;
            this.rightWindow.style.borderColor = carColor;
        }
    }]);

    return CarModifications;
}();

exports.default = CarModifications;

/***/ })
/******/ ]);