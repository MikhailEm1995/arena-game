import {
	ADD_BONUS,
	DELETE_BONUS
} from '../constants/eventTypes';

export const addBonus = (bonus) => {
	return {
		type: ADD_BONUS,
		bonus
	}
};

export const deleteBonus = (id) => {
	return {
		type: DELETE_BONUS,
		id
	}
};
