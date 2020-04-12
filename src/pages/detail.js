import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/button.back.to.home';

const API_KEY = "bef15e56";

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            isExact: PropTypes.bool,
            params: PropTypes.object,
            path: PropTypes.string,
            url: PropTypes.string,
        }),
    }

    state = { movie: {} }

    fetchMovie = ({ movieId }) => {
        console.log('roberto', movieId)
        fetch(`http://omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            });
    };

    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params;
        this.fetchMovie({ movieId });
    }

    render() {
        const {
            Actors,
            Metascore,
            Plot,
            Poster,
            Title,
        } = this.state.movie;

        return (
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}
