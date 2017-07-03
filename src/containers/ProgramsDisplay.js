import React from 'react';
import {connect} from 'react-redux';
import ProgramDisplay from '../components/Program_Display';

export default class ProgramsDisplay extends React.Component{
	render(){
		
		return (
				<div>
					<ProgramDisplay program={this.props.router.params.program} />
				</div>
			);
	}
}