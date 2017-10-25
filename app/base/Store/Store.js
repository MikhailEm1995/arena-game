import _ from 'lodash';

function Store() {

	const self = this;

	const state = {};

	const listeners = {};

	const fire = (event, data) => {
		if (listeners[event] === undefined) return;

		listeners[event].forEach(listener => listener(data));
    };

	self.addBox = (box, structure) => {
		if (state[box] !== undefined) return false;

		state[box] = structure;
		return self;
	};

	self.getState = () => {
		return _.cloneDeep(state);
	};

	self.setBox = (box, newValue) => {
		if (state[box] === undefined) return false;

		state[box] = newValue;

		fire(box, newValue);

		return self;
	};

	self.subscribe = (event, listener) => {
		if (!state[event]) return;
		if (!(listeners[event] instanceof Array)) listeners[event] = [];

		listeners[event].push(listener);
	};

	self.subscribeAll = (obj) => {
		Object.entries(obj).forEach((entry, i) => {
			if (!state[entry[0]]) return;
			entry[1].forEach(func => self.subscribe(entry[0], func));
		});
	};

	self.unsubscribe = (event, id) => {
		if (!listeners[event] || id > listeners[event].length - 1) return;

		listeners[event].splice(id, 1);
	};

	self.unsubscribeAll = (event) => {
		if (!listeners[event]) return;

		listeners[event] = [];
	};
}

Store.prototype.getBox = function(box) {
	return this.getState()[box];
};

export default Store;
