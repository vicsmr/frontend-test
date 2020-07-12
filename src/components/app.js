import React from "react";
import { Component } from "react";
import MovieForm from '../containers/movie_form';
import MoviesList from '../containers/movies_list';
import MoviesFilter from '../containers/movies_filter';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="content">
        <MovieForm />
        <MoviesFilter />
        <SearchBar />
        <MoviesList />
      </div>
    );
  }
}
