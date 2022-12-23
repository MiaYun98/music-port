import {React, useState, useEffect} from 'react'
import "./style.css"
import FirstSong from "../../assets/1.jpg"

export default function Home() {
  const [titleSong, setTitleSong] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    console.log(play)
    console.log(titleSong)
  }, [play])
  
  const musichandle = (e) => {
    console.log(e.target)
    if(play === false) {
      setTitleSong(e.target.getAttribute('musiTitle'))
      setPlay(true)
    } else if (play === true) {
      setPlay(false)
    }
  }

  return (
    <div className="home container">
      <ul className='music'>
        <li className='card' onClick={musichandle} musiTitle = 'Pristellium'>
          <img src={FirstSong} alt='Pristellium'/>
          <p>Pristellium</p>
        </li>
        <li className='card' onClick={musichandle}>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card' onClick={musichandle}>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card' onClick={musichandle}>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card' onClick={musichandle}>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
      </ul>
    </div>
  )
}
