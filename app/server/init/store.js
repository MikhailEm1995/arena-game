import Store from '../../base/Store/Store';
import {
	PLAYERS,
	SHOOTS,
	BONUSES,
	OBSTACLES
} from '../../base/constants/boxes';

export const store = new Store();

store.addBox(PLAYERS, [])
	.addBox(SHOOTS, [])
	.addBox(BONUSES, [])
	.addBox(OBSTACLES, []);

export const {
	setBox,
	getBox,
	subscribe,
	subscribeAll
} = store;
