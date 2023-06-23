import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../common/movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './Movie.css'

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const renderMovies = movies.Response === "True" ? movies.Search.map((value,i) => (
      <MovieCard value={value} key={i}/>
    )) : <div className='noMovie'><p>No movies Found</p></div>
  return (
    <div className="movie">
      <div className='listing'>
        {renderMovies}
      </div>
    </div>
  )
}

export default MovieListing
