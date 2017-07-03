import axios from 'axios';
import { browserHistory } from 'react-router';
import constants from '../constants';
import actions from './actionTypes';


const categories = [
			{'language': 'JAVA'}, 
			{'language': 'PHP'},
			{'language': 'JAVASCRIPT'},
			{'language': 'C++'},
			{'language': 'C#'},
			{'language': 'JAVA'}, 
			{'language': 'PHP'},
			{'language': 'JAVASCRIPT'},
			{'language': 'C++'},
			{'language': 'C#'},
			{'language': 'JAVA'}, 
			{'language': 'PHP'},
			{'language': 'JAVASCRIPT'},
			{'language': 'C++'},
			{'language': 'C#'},
			{'language': 'JAVA'}, 
			{'language': 'PHP'},
			{'language': 'JAVASCRIPT'},
			{'language': 'C++'},
			{'language': 'C#'},
			{'language': 'JAVA'}, 
			{'language': 'PHP'},
			{'language': 'JAVASCRIPT'},
			{'language': 'C++'}
		];

export function getMainData(start = 0, limit = 0) { 
	return (dispatch) => {
		return axios.get(`${constants.API_URL}post/categories/${start}/${limit}`)
		  .then(function (response) { 
		    	dispatch({type: actions.GET_MAIN_DATA, payload: response.data});
		  })
		  .catch(function (error) {
		    console.log(error);
		 });
	}
	
}


export function getApiData({start, limit, searchText = ''}){

	limit += start;
	
	const results = categories.filter(category => {
		return category.language.match(new RegExp(searchText, 'i'))
	});

	return dispatch => {
		dispatch({
			type: actions.GET_API_DATA,
			payload: {
				categories: results.slice(start, limit),
				total: results.length
			}
		});
	}
}

export function updateSearch (key, value) {
	
	return dispatch => new Promise(function(resolve, reject){
		dispatch({
			type: actions.UPDATE_SEARCH,
			payload: {
				[key]: value,
			}
		});
		resolve();
	});
}

export function emptySearch() {

	return dispatch => {
		dispatch({
			type: actions.RESET_STATE
		});
	}
}



