import {
	ADD_BONUS,
	DELETE_BONUS
} from '../constants/eventTypes';

const transformBonuses = (box, action) => {
	switch (action.type) {
		case ADD_BONUS: {
			return box.concat([action.bonus]);
		}
		case DELETE_BONUS: {
			return box.filter((item, i) => !i === action.id);
		}
		default: {
			return box;
		}
	}
};

export default transformBonuses;