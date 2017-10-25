import {
	ADD_PLAYER,
	DELETE_PLAYER
} from '../constants/eventTypes';

const transformPlayers = (box, action) => {
	switch (action.type) {
		case ADD_PLAYER: {
			return box.concat([action.player]);
		}
		case DELETE_PLAYER: {
			return box.filter((item, i) => !i === action.id);
		}
		default: {
			return box;
		}
	}
};

export default transformPlayers;
