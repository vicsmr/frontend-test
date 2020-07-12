import React, { Component } from "react";
import { connect } from "react-redux";

class MoviesList extends Component {

  listGenres(genres) {
    return genres.map((genre) =>
      <li key={genre}>{genre}</li>
    );
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
            ></input>
          </td>
          <td>{name}</td>
          <td>{this.listGenres(genres)}</td>
          <td><button>Delete</button></td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div>
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

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MoviesList);
