import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getPopularMovies } from '../services/api';

export default function Home() {
  const[searchQuiry , setSearchQuiry] = useState("")
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  
  const handelSearch =  (e)=>{
    e.preventDefault()
    alert(searchQuiry)
  }
  return (
    <>
      <div
        style={{
          backgroundColor: '#f8f9fa', // Couleur d'arrière-plan clair
        
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centre verticalement le formulaire
        }}
      >
   
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',  // Centre l'élément horizontalement
        marginTop: '14px'
        
      }}
    >
<form  onSubmit={handelSearch}>
    <div className="input-group  ms-5" style={{width: "39rem", marginLeft: "40%"}}>
  <input type="text" className="form-control ms-5" placeholder="search for a movie" value={searchQuiry} onChange={(e)=>setSearchQuiry(e.target.value)}/>
  <button className="btn btn-outline-secondary" type='submit' id="button-addon2"> 🔍

</button>
</div>
</form>
</div>
    <div>
        {movies
        .filter((movie)=>movie.title.toLowerCase().startsWith(searchQuiry.toLowerCase()))
        .map((movie)=> 
         (
        <MovieCard movie={movie} key={movie.id}/>))}
    </div>
    </div>
    </>
  )
}
