import {React, useState, useEffect} from 'react'
import "./style.css"
import FirstSong from "../../assets/1.jpg"
import SecondSong from "../../assets/Eleutheromania.png"

export default function Home() {
  const [titleSong, setTitleSong] = useState("")
  const [play, setPlay] = useState(false)

  useEffect(() => {
    console.log(titleSong)
    if(play === true) {
      console.log(play)
    } else {
      console.log(play)
    }
  }, [play])
  
  const musichandle = (e) => {
    console.log(e.target)
    let allCard = document.querySelectorAll(".card")
    allCard.forEach(card => card.classList.remove("playback"))
    let allLink = document.querySelectorAll(".titleLink")
    allLink.forEach(link => link.classList.remove("playtitle"))
    let allpart = document.querySelectorAll(".titlepart")
    allpart.forEach(part => part.classList.remove("playtitle"))
    if(play === false) {
      setTitleSong(e.target.getAttribute('musiTitle'))
      e.target.parentElement.classList.add("playback")
      e.target.parentElement.querySelector(".titleLink").classList.add("playtitle")
      e.target.parentElement.querySelector(".titlepart").classList.add("playtitle")
      setPlay(true)
    } else if (play === true) {
      setPlay(false)
    }
  }

  return (
    <div className="home container">
      <ul className='music'>
        <li className='card'>
          <img src={FirstSong} alt='Pristellium' onClick={musichandle} musiTitle = 'Pristellium'/>
          <a className='titleLink'href='https://soundcloud.com/user-156586152/4icfvetcbmfw?si=245f258297a64030afffdb057e40b136&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank'><p className='titlepart'>Pristellium</p></a>
        </li>
        <li className='card'>
          <img src={SecondSong} onClick={musichandle}/>
          <a className='titleLink'href='https://soundcloud.com/0xalis/eleutheromania' target='_blank'><p className='titlepart'>Eleutheromania</p></a>
        </li>
        <li className='card'>
          <img src={FirstSong} onClick={musichandle}/>
          <a className='titleLink'href='https://soundcloud.com/user-156586152/4icfvetcbmfw?si=245f258297a64030afffdb057e40b136&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank'><p className='titlepart'>Pristellium</p></a>
        </li>
        <li className='card'>
          <img src={FirstSong} onClick={musichandle}/>
          <a className='titleLink'href='https://soundcloud.com/user-156586152/4icfvetcbmfw?si=245f258297a64030afffdb057e40b136&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank'><p className='titlepart'>Pristellium</p></a>
        </li>
        <li className='card'>
          <img src={FirstSong} onClick={musichandle}/>
          <a className='titleLink'href='https://soundcloud.com/user-156586152/4icfvetcbmfw?si=245f258297a64030afffdb057e40b136&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank'><p className='titlepart'>Pristellium</p></a>
        </li>
      </ul>
    </div>
  )
}
