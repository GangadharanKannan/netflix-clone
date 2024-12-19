import { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import './HeroSection.css'
import { Link } from 'react-router-dom'

const HeroSection = (props) => {
  const [movie,setMovie] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random()*20)]);
    })
  },[])
  return (
    <div style={{ backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:""})`}} className='home'>
      <div className="content">
        <h1 style={{ fontSize: '45px', paddingBottom: '30px'}} className="title text-2xl">{movie?movie.title||movie.name:""}</h1>
        <div className="banner_buttons">
          <Link to={`/Netflix Orginals/${movie?movie.id:''}`} className="button">Play</Link>
          <Link to={'/'} className="button">My List</Link>
        </div>
        <p className="description">{movie?movie.overview:""}</p>
      </div>
      <div className="bottomfade"></div>
    </div>
  )
}

export default HeroSection