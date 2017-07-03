import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import { Row, Col, Button } from 'react-bootstrap';
import * as actions from '../actions';

import constants from '../constants';

@connect((state) => state)
export default class Home extends Component {
	componentDidMount() { console.log(actions)
		this.props.dispatch(actions.getMainData(0, 10));	
	}

	render() { 
		console.log(this.props)
		return(
			<Col className="container">
				<Row>
					Home
				</Row>
			</Col>
		);
	}
}