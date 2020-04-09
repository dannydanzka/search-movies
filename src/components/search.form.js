import React, { Component } from 'react'

const API_KEY = "bef15e56";

export class SearchForm extends Component {
    state = {
        inputMovie: '',
    }

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state;
        fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
            });
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Movie to search"
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;