import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterMoviesByGenre } from "../actions/index";
import RadioButton from "../components/radio_button";

const HORROR = 'horror';
const ROMANCE = 'romance';
const COMEDY = 'comedy';
const GENRE = 'genre';

class MoviesFilter extends Component {

	constructor(props) {
		super(props);

		this.state = {
			filter: null
		};
	}

	changeFilterGenre = (genreToFilter) => {
		this.setState({
			filter: genreToFilter
		})
		this.props.filterMoviesByGenre(genreToFilter);
	}

	render() {
		return (
			<div className="flex">
				<RadioButton name={GENRE} id={HORROR} title="Horror" value={HORROR} filter={this.state.filter}
					changeFilterGenre={this.changeFilterGenre}
				/>
				<RadioButton name={GENRE} id={ROMANCE} title="Romance" value={ROMANCE} filter={this.state.filter}
					changeFilterGenre={this.changeFilterGenre}
				/>
				<RadioButton name={GENRE} id={COMEDY} title="Comedy" value={COMEDY} filter={this.state.filter}
					changeFilterGenre={this.changeFilterGenre}
				/>

				<button className="btn" onClick={() => this.changeFilterGenre(null)}>Reset</button>
			</div>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ filterMoviesByGenre }, dispatch);
}

export default connect(null, mapDispatchToProps)(MoviesFilter);