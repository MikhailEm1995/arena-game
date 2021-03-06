import {
	ADD_PLAYER,
	DELETE_PLAYER
} from '../constants/eventTypes';

export const addPlayer = (player) => {
	return {
		type: ADD_PLAYER,
		player
	}
};

export const deletePlayer = (id) => {
	return {
		type: DELETE_PLAYER,
		id
	}
};
