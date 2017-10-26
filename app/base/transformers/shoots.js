import {
	ADD_SHOOT,
	DELETE_SHOOT
} from '../constants/eventTypes';

const transformShoots = (box, action) => {
	switch (action.type) {
		case ADD_SHOOT: {
			return box.concat([action.shoot]);
		}
		case DELETE_SHOOT: {
			return box.filter((item, i) => !i === action.id);
		}
		default: {
			return box;
		}
	}
};

export default transformShoots;
