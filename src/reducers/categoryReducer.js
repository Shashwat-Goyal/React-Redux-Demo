import actions from '../actions/actionTypes';

var initialState = {
	details: '',
	programsList: [],
	start: 0,
	limit: 5,
	total: 0,
	searchText: ''
}

const categoryReducer= (state= initialState, action) => {
	switch(action.type){
		case actions.CATEGORY_DETAILS : {
			return {
				...state,
				details: action.payload.details,
				programsList: state.programsList.concat(action.payload.programsList),
				total: action.payload.total
			};
		}

		case actions.PROGRAM_SEARCH : {
			return {
				...state,
				programsList: action.payload.searchText != undefined ? [] : state.programsList,
				start: action.payload.searchText != undefined ? 0 : state.start,
				...action.payload
		};
	}
	
		case actions.RESET_PROGRAMS_STATE : {
			return initialState;
		}

		default : return state;
}
}

export default categoryReducer;