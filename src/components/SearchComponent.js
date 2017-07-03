import React from 'react';

export default function SearchComponent({searchText}){
	return (
			
				<div className="container">
					<div className="row">
				        <div className="col-md-4 pull-right">
				            <div id="custom-search-input">
				                <div className="input-group col-md-12">
				                    <input type="text" className="form-control input-md" placeholder="Search..." onKeyUp={(e) => searchText(e)} />
				                </div>
				            </div>
				        </div>
					</div>
				</div>
			
		);
}