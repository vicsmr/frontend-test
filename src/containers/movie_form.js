import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMovie } from "../actions/index";

class MovieForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movieToAdd: {
				name: '',
				genres: []
			},
			selectedGenre: ''
		};
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		let movieToAdd = this.state.movieToAdd;
		movieToAdd[name] = value;

		this.setState({
			movieToAdd
		});
	}

	handleGenresListChange = (event) => {
		const target = event.target;
		const value = target.value;

		this.setState({
			selectedGenre: value
		});
	}

	addGenreToList = (event) => {
		let movieToAdd = this.state.movieToAdd;

		if (event.key === 'Enter') {
			if (movieToAdd.genres.find(genre => this.state.selectedGenre.toUpperCase() === genre.toUpperCase())) {
				this.setState({
					selectedGenre: ''
				});
			} else {
				movieToAdd.genres.push(this.state.selectedGenre);
				this.setState({
					selectedGenre: '',
					movieToAdd
				});
			}
		}
	}

	onFormSubmit = () => {
		// We need to go and fetch weather data
		this.props.addMovie(this.state.movieToAdd);
		this.setState({
			movieToAdd: {
				name: '',
				genres: []
			},
			selectedGenre: ''
		});
	}

	preventSubmit = (event) => {
		event.preventDefault();
	}

	listGenres() {
		return this.state.movieToAdd.genres.map((genre) =>
			<li key={genre}>{genre}</li>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.preventSubmit} className="input-group flex">
					<input
						placeholder="Name"
						name="name"
						className="form-control inline"
						value={this.state.movieToAdd.name}
						onChange={this.handleInputChange}
					/>
					<input
						placeholder="Genre"
						name="genre"
						className="form-control"
						value={this.state.selectedGenre}
						onChange={this.handleGenresListChange}
						onKeyPress={this.addGenreToList}
					/>
				</form>
				<ul>{this.listGenres()}</ul>
				<span className="input-group-btn">
					<button onClick={this.onFormSubmit} className="btn">Submit</button>
				</span>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieForm);
