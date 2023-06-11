import React, { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import SearchIcon from '../search.svg';
import MovieCard from '../moviecard';


const content = (props) => {
   // API KEY
  // dd9463fa

  const movie1 = {
      "Title": "Reign of Judges: Title of Liberty - Concept Short",
      "Year": "2018",
      "imdbID": "tt4275958",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",  
  }

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd9463fa";
  const[movies, setMovies] = useState([]); 
  const[searchTerm,setSearchTerm] = useState('');


  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s={title}`)

    const data = await response.json();

    console.log(data.Search);

    setMovies(data.Search);
  }

  useEffect(()=>{
     searchMovies('Avatar')
  },[]);

  return (
      <>
      
          <div className="app">
                  <h1>Movie Land</h1>
          </div>


          <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" />
            <img src={SearchIcon} onClick={()=>searchMovies(searchTerm)} alt="search"/>
          </div>

          {
            movies?.length>0?(
              <div className="container">
                 {movies.map((movie)=>( <MovieCard movie={movie}/>))}
               </div>
            ):(
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
          }

        


      </>
  )
}

export default content