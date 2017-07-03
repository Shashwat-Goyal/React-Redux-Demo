import React from 'react';
import {connect} from 'react-redux';
import GetCategoryFavourites from '../components/GetCategoryFavourites';
import actions from '../actions';
import SearchComponent from '../components/SearchComponent';

@connect((state) => state )
export default class FavouriteCategoryDisplay extends React.Component{

	componentDidMount() {
		this.getProgramsData();
	}

	getProgramsData() {
		const category = this.props.router.params.category;
		const { start, limit, searchText} = this.props.categoryDetails;
		this.props.dispatch(actions.getCategoryDetails(category, searchText, start, limit));
	}

	goToFavourite(program) {
		
		this.props.router.push(`/program/${program}`);
	}

	searchText(e) {
		
		if(e && e.keyCode === 13){
			console.log('entering');
			this.props.dispatch(actions.programSearch('searchText', e.target.value)).then(() => {
				
				this.getProgramsData();

			});	
		}
	}

	loadMoreprograms(){
		const { start, limit } = this.props.categoryDetails;
		this.props.dispatch(actions.programSearch('start', start + limit)).then(() => {

			this.getProgramsData();

		});
	}

	componentWillUnmount() {
		this.props.dispatch(actions.emptyProgramSearch());
	}

	render() {
		const show = this.props.categoryDetails.total && this.props.categoryDetails.start < this.props.categoryDetails.total - this.props.categoryDetails.limit ? true : false;
		return (
			<div>
				<SearchComponent searchText={::this.searchText}/>
				<GetCategoryFavourites categoryDetails={this.props.categoryDetails} loadMore={::this.loadMoreprograms} show={show} goToFavourite={::this.goToFavourite} language={this.props.router.params.category} />
			</div>
			);
		
	}
}