import React from 'react'
import './Row.css'
import { Link } from 'react-router-dom'
import { imageUrl } from '../../Constants/Constants'


const Row = ({data}) => {
  return (
    <Link to={`/${data.id}`}>
        <img src={imageUrl+data.backdrop_path} alt="" />
    </Link>
  )
}

export default Row