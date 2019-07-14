import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';



function Movie({poster,title}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    );
}

function MoviePoster({poster}){
    return(
        <img src={poster} />
    );
}
Movie.propTypes={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
MoviePoster.propTypes={
    poster: PropTypes.string.isRequired
}
export default Movie;