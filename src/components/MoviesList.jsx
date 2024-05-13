import React, { useState } from 'react';

const MoviesList = () => {
    // Task 1
    const [movies, setMovies] = useState([
        { title: 'Legally Blonde', description: 'Ambitous woman gets into Harvard Law and beats all the odds against her!' },
        { title: 'Mamma Mia', description: 'Awesome musical, summer in Italy.' },
        { title: 'Mean Girls', description: 'Must watch movie about growth.' },
    ]);

    // Task 2
    const toggleDetails = index => {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    // Task 3
    const removeMovie = index => {
        const newMovies = [...movies];
        newMovies.splice(index, 1);
        setMovies(newMovies);
    };

    return (
        <div>
            <h1>Movies List 🎬</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {movies.map((movie, index) => (
                    <li key={index} onClick={() => toggleDetails(index)}>
                        {movie.title}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            removeMovie(index);
                        }}>Remove</button>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
