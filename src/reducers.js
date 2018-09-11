import { combineReducers } from 'redux';

import { 	
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

const initialStateRobots = {
	isPending: false,
	error: '',
	robots: []
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, { searchField: action.payload })
		default:
			return state;
	}
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { isPending: false, robots: action.payload })
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload })
		default:
			return state;
	}
}

export const reducers = combineReducers(requestRobots, searchRobots);