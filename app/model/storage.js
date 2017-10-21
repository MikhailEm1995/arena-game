const storage = (function() {

    let listeners = {};

    let players = [];

    function fire(event, data) {
        listeners[event].forEach((listener) => {
            listener(data);
        });
    }

    function addPlayer(player) {
        players.push(player);
        fire('new player', players);
    }

    function addListener(event, listener) {
        if (listeners[event] === undefined) listeners[event] = [];
        listeners[event].push(listener);
    }

    return {
        addPlayer: addPlayer,
        addListener: addListener
    };
}());

export default storage;
