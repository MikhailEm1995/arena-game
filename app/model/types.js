import METHODS from './methods';

const TYPES = (function(methods) {
    let obj = {};

    Object.entries(methods).forEach((entry) => {
        obj[entry[0]] = entry[0];
    });

    return obj;
}(METHODS));

export default TYPES;
