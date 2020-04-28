import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css"


//state 변하지 않아되 되는 경우 class component일 필요 없다.
//즉 function으로 처리 해줘도 됨

function Movie({id, year, title, summary, poster,poster_detail, genres}) {
    return (
        <div className="movie">
            <Link
                to={{// eslint-disable-next-line 
                    pathname: '/movie/${id}',
                    state : {
                        year,
                        title,
                        summary,
                        poster,
                        poster_detail,
                        genres
                    }
                }}
            >
                <img  src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h3 className="movie_year">{year}</h3>
                    <ul className="movie_genres">
                        {genres.map((genre,index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0,180)}...</p>

                </div>


            </Link>
        </div>

    )

}


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    poster_detail:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf
}

export default Movie;