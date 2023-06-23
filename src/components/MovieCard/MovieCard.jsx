import React from 'react'
import "./MovieCard.css"
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const { value } = props
  return (
    <div>
      <Link to={`/shows/${value.imdbID}`}><div className="moviecard">
        <img src={value.Poster} alt="" className='poster'/>
        <p>{value.Title}</p>  
      </div></Link>
    </div>
  )
}

export default MovieCard
