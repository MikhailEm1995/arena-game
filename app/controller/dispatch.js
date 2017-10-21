import events from './events';

function dispatch(type, data) {
    events[type](data);
}

export default dispatch;
