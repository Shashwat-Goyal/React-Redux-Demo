import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

	export default function Categories(prop){
		const categoryList = prop.categories || [];
		return (
			<div style={{textAlign: 'center'}}>
				<ListGroup>
					{categoryList ? categoryList.map((category, index) => {
						return (
						 <ListGroupItem style={{textAlign: 'center', marginTop: 10}} key={index} onClick={() => prop.goToFavourite(category.language)} >
						  	<h3> { category.language } </h3>
						 </ListGroupItem>
						);
					}) : '' }
				</ListGroup>
				{prop.show ? <Button bsStyle="success" style={{margin: 'auto'}} onClick={() => prop.loadMore()}>Load More</Button> : <h4>Sorry, There are no more results to display</h4>}
			</div>
		)
	}