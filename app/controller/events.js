import METHODS from '../model/methods';

const events = (function(methods) {
    let obj = {};

    Object.entries(methods).forEach((method) => {
        obj[method[0]] = method[1];
    });

    return obj;
}(METHODS));

export default events;
