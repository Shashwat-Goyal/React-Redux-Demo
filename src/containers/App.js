import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import {Row, Col} from 'react-bootstrap';
import Header from '../common/Header';
import Footer from '../common/Footer';

@connect((state) => state)
export default class App extends Component {

	render() {
		var childrenWithProps = React.cloneElement(this.props.children, {...this.props, key: this.props.location.pathname});
	    return (
	    	<Row>
		      	<Col xs={12}>
		      		<Header />
		      		{childrenWithProps}
		      		<Footer />
		      	</Col>
	      	</Row>
	    );
	}
}
