import React,{ useEffect, useState } from 'react'
import MovieApi from '../../features/MovieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../common/movies/MovieSlice'
import MovieListing from '../MovieListing/MovieListing';
import './Home.css'

const Home = () => {
  const [ text, setVal] = useState("");
  const [ movietext,setMovieText ] = useState("avengers");
  const dispatch = useDispatch();
    useEffect(() => {    
        const movie = async () => {
            const response= await MovieApi.get(`?i=tt3896198&apikey=2b1251a3&s=${movietext}&type=movie`)
            .catch((err) => {
                console.log(err);
            })
            console.log(response)
            dispatch(addMovies(response.data))
        }
        movie()
    }, [dispatch, movietext])

    const addActivity = text => {
      if(text !== ""){
        setMovieText(text)
        setVal("")
      }
      else{
        alert("Search Bar is Empty")
      }
    }

  return (
    <div className='home'>
      <div className="search">
        <input type="text" placeholder='Search....' value={text} onChange={(e) => {setVal(e.target.value)}}/>
        <button onClick={
          () => addActivity(text)
        }>Search</button>
      </div>
        <MovieListing />
    </div>
  )
}

export default Home
