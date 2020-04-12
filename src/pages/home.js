import React, { Component } from 'react'
import { Title } from '../components/title'
import { SearchForm } from '../components/search.form'
import { MoviesList } from '../components/movies.list';

export class Home extends Component {
    state = { usedSearch: false, results: [] };

    handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    };

    renderResults = () => {
        return this.state.results.length === 0
            ? <p>Sorry! Results not found!</p>
            : <MoviesList movies={this.state.results} />
    };

    render () {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this.handleResults}/>
                </div>
                {this.state.usedSearch
                    ? this.renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }
};

