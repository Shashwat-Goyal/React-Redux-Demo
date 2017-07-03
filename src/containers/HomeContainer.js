import React from 'react';
import Categories from '../components/Categories';
import {connect} from 'react-redux';
import SearchComponent from '../components/SearchComponent';
import actions from '../actions';

@connect((state) => ({
	categoryStore: state.categories
}))
export default class HomeContainer extends React.Component{

	constructor(props){
		super(props);
	}

	getApiData (searchOptions){

		this.props.dispatch(actions.getApiData(searchOptions));
	}

	componentDidMount() {
		this.getApiData(this.props.categoryStore.searchOptions)
	}

	componentWillUnmount() {
		this.props.dispatch(actions.emptySearch());
	}

	goToFavourite(language){
		this.props.router.push(`/category/${language}`);
	}

	searchText(e){
		
		if(e && e.keyCode === 13){
			
			this.props.dispatch(actions.updateSearch('searchText', e.target.value)).then(() => {
				
				this.getApiData(this.props.categoryStore.searchOptions);
			});
			
			
		}
	}

	loadMoreCategories(){
		const { start, limit } = this.props.categoryStore.searchOptions;
		this.props.dispatch(actions.updateSearch('start', start + limit)).then(() => {
			let {searchOptions} = this.props.categoryStore;
			this.getApiData(searchOptions)
		});
	}

	render(){

		const {categories} = this.props.categoryStore;
		const show = this.props.categoryStore.total && this.props.categoryStore.searchOptions.start < this.props.categoryStore.total - this.props.categoryStore.searchOptions.limit ? true : false;
		return (
				<div>
					<SearchComponent searchText={::this.searchText} />
					<br />
					<Categories categories={categories} goToFavourite= {::this.goToFavourite} loadMore= {::this.loadMoreCategories} show={show}/>	
				</div>
			);
	}
}