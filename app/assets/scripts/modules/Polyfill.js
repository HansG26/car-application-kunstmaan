class Polyfill {
    constructor() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
    }
}

export default Polyfill;