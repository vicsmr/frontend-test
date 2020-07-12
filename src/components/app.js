import React from "react";
import { Component } from "react";
import MovieForm from '../containers/movie_form';
import MoviesList from '../containers/movies_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieForm />
        <MoviesList />
      </div>
    );
  }
}
