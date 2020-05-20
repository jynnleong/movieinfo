import React from 'react';
import './App.css';

function Movies({name, Description,image}){
    return(
        <div className="movie-banner">
            <h3>{name}</h3>
            <p>{Description}</p>
            <img src={image} alt="Poster not available"/>
        </div>
    );
}

export default Movies;