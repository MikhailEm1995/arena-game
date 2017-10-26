import manager from './manager/manager';
import {
	store,
	subscribeAll
} from './init/store';
import {
	PLAYERS
} from '../base/constants/boxes';

// testing code

function writeText(text) {
	console.log('I work');
	console.log(text);
}

store.subscribeAll({
	PLAYERS: [
		writeText
	]
});

manager.addPlayer('Just a test');
manager.addPlayer('One more test');
manager.deletePlayer(0);

console.dir(store.getState());
