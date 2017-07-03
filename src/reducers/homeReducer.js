import actions from '../actions/actionTypes';

var initialState = {
	categories: [],
	searchOptions: {
		searchText: '',
		start: 0,
		limit: 5
	},
	total: 0
}

const homeReducer = (state = initialState, action) => { 

	switch(action.type) {
		case actions.RESET_STATE: {
			
			return {
				...state,
				categories: [],
				searchOptions: {
					start : 0,
					limit: 5,
					searchText: ''
				},
				total : 0
			}
			
		}

		case actions.GET_API_DATA: {
			return {
				...state,
				categories: state.categories.concat(action.payload.categories),
				total: action.payload.total
			};
		}
		case actions.UPDATE_SEARCH: {
			return {
				...state,
				categories: action.payload.searchText != undefined ? [] : state.categories,
				searchOptions: {
					...state.searchOptions,
					start: action.payload.searchText != undefined ? 0 : state.searchOptions.start,
					...action.payload
				}
			};
		}
		default :
			return state;
	}
}

export default homeReducer;