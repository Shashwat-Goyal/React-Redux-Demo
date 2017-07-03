import React from 'react';

export default function Footer(){
	return (
			<div style={{marginTop: 65}}>
				<div className="navbar navbar-default navbar-fixed-bottom">
				    <div className="container">
				      <p className="navbar-text pull-left">© 2014 - Site Built By Mr. M.
				           <a href="http://tinyurl.com/tbvalid" target="_blank" >HTML 5 Validation</a>
				      </p>
				      
				      <a href="http://youtu.be/zJahlKPCL9g" className="navbar-btn btn-danger btn pull-right">
				      <span className="glyphicon glyphicon-star"></span>  Subscribe on YouTube</a>
			    	</div>
				</div>
			</div>
		);
}