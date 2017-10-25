import Dispatcher from '../../base/Dispatcher/Dispatcher';
import { store } from './store';

export const dispatcher = new Dispatcher(store);

export const { dispatch } = dispatcher;
