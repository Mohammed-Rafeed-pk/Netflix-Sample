import axios from './axios';
import React, { useEffect, useState } from 'react'
import './RowPost.css';
import YouTube from 'react-youtube';
import { imageURL,API_KEY} from './Constants/Constants';
function RawPost(props) {
  const[movies,setMovies]=useState([])
  const[urlId, setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results);     
    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovies =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        alert('Movie content not available');
      }
    })
  }
  return (
    <div className='raw'>
        <h2>{props.title}</h2>
        <div className={props.isSmall ? 'smallPoster' : 'posters' }>
          {movies.map((obj)=>{
            return(
             <img onClick={()=>handleMovies(obj.id)} src={`${imageURL+obj.backdrop_path }`} alt="" />
            )
          })}
          
            
        </div>
       {  urlId && <  YouTube videoId={urlId.key} opts={opts}/>  }
    </div>
  )
}

export default RawPost





  // this is from App.js

// import React from 'react'
// import Banner from './PROJECTS/NETFLIX_project_btm/Banner'
// import NavBar from './PROJECTS/NETFLIX_project_btm/NavBar'
// import RawPost from './PROJECTS/NETFLIX_project_btm/RawPost'
// import { Orginals,action } from './PROJECTS/NETFLIX_project_btm/URLS'

// function App() {
//   return (
//     <div>
//       <NavBar/>
//       <Banner/>
//       <RawPost url={Orginals} title="Netflix Orginals" />
//       <RawPost url={action} title="Actions" isSmall/>
//      </div>
//   )
// }

// export default App