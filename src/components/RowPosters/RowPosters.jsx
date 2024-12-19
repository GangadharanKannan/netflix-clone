import './RowPoster.css'
import axios from '../../axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Row from '../Row/Row'

const RowPosters = (props) => {
  const [movie,setMovie] = useState();
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    })
  },[]);
  return (
    <div className='row'>
        <h1 className='title'>{props.title}</h1>
        <div className="posters">
          {
            movie? movie.map((obj,index)=>{
              return (
                <>               
                <Row key={index} prop={props} data={obj}/>
                </>
             )
            }):""
          }
        </div>
    </div>
  )
}

export default RowPosters

//  className={props.ismall?'smallposter':'poster'}