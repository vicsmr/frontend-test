import React, { Component } from "react";
import PropTypes from 'prop-types';

class RadioButton extends Component {
	render() {
		return (
			<div className="control-radio" >
				<input type="radio" className="input-radio"
					id={this.props.id} name={this.props.name} value={this.props.value}
					onChange={(event) => this.props.changeFilterGenre(event.target.value)}
					checked={this.props.filter === this.props.value}
				></input>
				<label htmlFor={this.props.id}>{this.props.title}</label>
			</div>
		);
	}
}

RadioButton.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	title: PropTypes.string,
	filter: PropTypes.string,
	changeFilterGenre: PropTypes.func
};

export default RadioButton;
