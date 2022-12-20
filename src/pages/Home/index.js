import {React, useState, useEffect} from 'react'
import "./style.css"
import FirstSong from "../../assets/1.jpg"

export default function Home() {
  const [titleSong, setTitleSong] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    console.log(play)

  }, [play])
  
  const musichandle = (e) => {
    console.log("click")
    console.log(e.target)
    if(play === false) {
      setPlay(true)
    } else if (play === true) {
      setPlay(false)
    }
  }

  return (
    <div className="home container">
      <ul className='music'>
        <li className='card' onClick={musichandle}>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card'>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card'>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card'>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
        <li className='card'>
          <img src={FirstSong}/>
          <p>Pristellium</p>
        </li>
      </ul>
    </div>
  )
}
