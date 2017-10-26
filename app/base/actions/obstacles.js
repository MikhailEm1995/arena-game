import {
	ADD_OBSTACLE,
	DELETE_OBSTACLE
} from '../constants/eventTypes';

export const addObstacle = (obstacle) => {
	return {
		type: ADD_OBSTACLE,
		obstacle
	}
};

export const deleteObstacle = (id) => {
	return {
		type: DELETE_OBSTACLE,
		id
	}
};
