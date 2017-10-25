import {
	ADD_OBSTACLE,
	DELETE_OBSTACLE
} from '../constants/eventTypes';

const transformObstacles = (box, action) => {
	switch (action.type) {
		case ADD_OBSTACLE: {
			return box.concat([action.obstacle]);
		}
		case DELETE_OBSTACLE: {
			return box.filter((item, i) => !i === action.id);
		}
		default: {
			return box;
		}
	}
};

export default transformObstacles;
