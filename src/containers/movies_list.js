import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteMovie, putWatchedMovie } from "../actions/index";

class MoviesList extends Component {

  listGenres(genres) {
    return genres.map((genre) =>
      <li key={genre}>{genre}</li>
    );
  }

  removeMovie(movieData) {
    this.props.deleteMovie(movieData);
  }

  updateWatchedMovie(movieData, isChecked) {
    if (isChecked) {
      movieData.watched = 'true'
    } else {
      movieData.watched = 'false'
    }
    this.props.putWatchedMovie(movieData);
  }

  renderMovie = (movieData) => {
    const name = movieData.name;
    const genres = movieData.genres;
    if (!movieData.hidden) {
      return (
        <tr key={name}>
          <td>
            <input
              type="checkbox"
              onChange={(event) => this.updateWatchedMovie(movieData, event.target.checked)}
            ></input>
          </td>
          <td>{name}</td>
          <td>{this.listGenres(genres)}</td>
          <td><button className="btn" onClick={() => this.removeMovie(movieData)}>Delete</button></td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div class="list-elements">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Watched</th>
              <th>Name</th>
              <th>Genres</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(this.renderMovie)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteMovie, putWatchedMovie }, dispatch);
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
