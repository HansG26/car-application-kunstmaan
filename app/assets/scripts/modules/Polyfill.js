import Promise from 'promise-polyfill'; // polyfill Promise

class Polyfill {
    constructor() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
        if (!window.Promise) {
            window.Promise = Promise;
        }
    }
}

export default Polyfill;