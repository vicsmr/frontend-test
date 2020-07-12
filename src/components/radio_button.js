import React, { Component } from "react";

class RadioButton extends Component {
	render() {
		return (
			<div>
				<input type="radio" id={this.props.id} name={this.props.name} value={this.props.value}
					onChange={(event) => this.props.changeFilterGenre(event.target.value)}
					checked={this.props.filter === this.props.value}
				></input>
				<label htmlFor={this.props.id}>{this.props.title}</label>
			</div>
		);
	}
}

export default RadioButton;
