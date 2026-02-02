import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres}) {
    return (
    <div className="movie">
        <Link 
            to={{
                pathname: '/movie-detail',
                state: { year, title, poster, genres}
            }}

        >

        <img src={poster} alt={title} title={title} />
    <div className="movie__data">
        <h3 className="movie__title">{title} </h3>
        <h4 className="movie__year">{year} </h4>
        <ul className="novie__genres">
            {genres.map((genre, index) => {
                return <li key={index} className="movie__genre">
                    {genre}
                    </li>
            })}
        </ul>
    </div>
    </Link>
    </div>
    );
}

Movie.propTypes = {
                    title: PropTypes.string.isRequired,
                    year: PropTypes.number.isRequired,
                    poster: PropTypes.string.isRequired,
                    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
                };

export default Movie;