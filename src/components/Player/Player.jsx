import React, { useEffect, useState } from 'react'
import './Player.css'
import axios from '../../axios'
import back_arrow from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../../Constants/Constants'

const Player = () => {

  const { type, id } = useParams();
  const [value,setValue] = useState({});
  useEffect(()=>{
    if(type=="Netflix Orginals"){
      axios.get(`tv/${id}/videos?api_key=${API_KEY}`).then((response)=>{
        setValue(response.data.results[0])
      })
    } else{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
        setValue(response.data.results[0])
      })
    }
},[]);
  return (
    <div className='player'>
        <Link to={'/'}><img src={back_arrow} alt="" /></Link>
        <iframe width='90%' height='80%' src={`https://www.youtube.com/embed/${value.key}`} title='trailer' allowFullScreen></iframe>
        <div className="player_info">
            <p>{value.published_at?value.published_at.slice(0,10):""}</p>
            <p>{value.name?value.name.slice(0,17):''}</p>
            <p>{value.type}</p>
        </div>
    </div>
  )
}

export default Player