import {
	ADD_SHOOT,
	DELETE_SHOOT
} from '../constants/eventTypes';

export const addShoot = (shoot) => {
	return {
		type: ADD_SHOOT,
		shoot
	}
};

export const deleteShoot = (id) => {
	return {
		type: ADD_SHOOT,
		id
	}
};
