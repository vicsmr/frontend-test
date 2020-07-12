import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovie } from "../actions/index";

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchParam: ''
		};
	}

	handleInputChange = (event) => {
		this.setState({
			searchParam: event.target.value
		});
	}

	searchMovie = (event) => {
		event.preventDefault();
		this.props.searchMovie(this.state.searchParam);
		this.setState({
			searchParam: ''
		})
	}

	render() {
		return (
			<form onSubmit={(event) => this.searchMovie(event)} className="input-group flex">
				<input
					placeholder="Search text"
					name="searchParam"
					className="form-control inline"
					value={this.state.searchParam}
					onChange={this.handleInputChange}
				/>
				<button type="submit">Search</button>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);