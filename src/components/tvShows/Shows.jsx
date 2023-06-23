import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieApi from '../../features/MovieApi'
import { addMovieDetails } from '../../common/movies/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../common/movies/MovieSlice'
import './Shows.css'

const Shows = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getMovieDetails)
  console.log(data)
  useEffect(() => {
    const movieDetail = async (imdbID) => {
      const response = await MovieApi.get(`?apikey=2b1251a3&i=${imdbID}&plot=full`)
      .catch((err) => {
        console.log(err)
      })
      dispatch(addMovieDetails(response.data))
    }
    console.log(imdbID)
    movieDetail(imdbID)
  },[dispatch, imdbID])

  return (
    <>
    <Link to='/'>Home</Link>
    <div className='details'>
      <div className="left">
        <h1>{data.Title}</h1>
        <h3>Description</h3>
        <p>{data.Plot}</p>
        <p>Released : {data.Released}</p>
        <p>Genre : {data.Genre}</p>
        <p>Language : {data.Language}</p>
        <p>imdb Rating : {data.imdbRating}</p>
      </div>
      <div className="right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
    </>
  )
}

export default Shows
