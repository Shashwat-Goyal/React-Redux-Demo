import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function GetCategoryFavourites(prop){
	
	const categoryDetail = prop.categoryDetails || {};
	const details = categoryDetail.details || '' ;
	const programsList  = prop.categoryDetails.programsList || [];

	return (
		<div className='container' style={{ marginTop: 10, textAlign:'center' }}>
			{categoryDetail ? <div>
				<h2 style={{textAlign:'center'}}> {prop.language} </h2>
				<hr />
				<p className="lead"> {details}</p>
				<hr />
				<h3>{`List of Programs in ${prop.language}`}</h3>
				<br />
				<ListGroup>
					{programsList.map((program, index) => {
						return (
							<ListGroupItem style={{textAlign: 'center', marginTop: 10}} key={index} onClick={() => prop.goToFavourite(program)}><h4> { program } </h4> </ListGroupItem>
							);
					})
				}
				</ListGroup>
				</div> : ''}
				{prop.show ? <Button bsStyle="success" style={{margin: 'auto'}} onClick={() => prop.loadMore()}>Load More</Button> : <h4>Sorry, There are no more results to display</h4>}
			</div>
		);
}