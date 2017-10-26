import {
	PLAYERS,
	SHOOTS,
	BONUSES,
	OBSTACLES
} from '../../base/constants/boxes';

import { addBonus, deleteBonus } from '../../base/actions/bonuses';
import { addPlayer, deletePlayer } from '../../base/actions/players';
import { addShoot, deleteShoot } from '../../base/actions/shoots';
import { addObstacle, deleteObstacle } from '../../base/actions/obstacles';

import transformPlayers from '../../base/transformers/players';
import transformShoots from '../../base/transformers/shoots';
import transformBonuses from '../../base/transformers/bonuses';
import transformObstacles from '../../base/transformers/obstacles';

import { dispatch } from '../init/dispatcher';

const manager = {
	addPlayer: player => dispatch(PLAYERS, addPlayer(player), transformPlayers),
	deletePlayer: id => dispatch(PLAYERS, deletePlayer(id), transformPlayers),
	addShoot: shoot => dispatch(SHOOTS, addShoot(shoot), transformShoots),
	deleteShoot: id => dispatch(SHOOTS, deleteShoot(id), transformShoots),
	addBonus: bonus => dispatch(BONUSES, addBonus(bonus), transformBonuses),
	deleteBonus: id => dispatch(BONUSES, deleteBonus(id), transformBonuses),
	addObstacle: obstacle => dispatch(OBSTACLES, addObstacle(obstacle), transformObstacles),
	deleteObstacle: id => dispatch(OBSTACLES, deleteObstacle(id), transformObstacles)
};

export default manager;
