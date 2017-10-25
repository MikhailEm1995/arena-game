let Dispatcher = function(store) {
	this.dispatch = (box, action, transformer) => {
        const currentBox = store.getBox(box);

        if (!currentBox) return;

        store.setBox(box, transformer(currentBox, action));
    };

	Dispatcher = () => this;
};

export default Dispatcher;
