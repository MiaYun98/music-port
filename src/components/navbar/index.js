import "./style.css"
import Picture from "../../assets/profile.jpg"
import Tiwtter from "../../assets/twitter.png"
import SoundCloud from "../../assets/soundcloud.png"
import Gmail from "../../assets/google.png"

export default function Navbar () {
    return (
        <div className="navbar">
            <a href="/"><img className="pic" src={Picture} alt="ris's picture"/></a>
            <h1>Chris Han</h1>
            <h2>About</h2>
            <h2>Contact</h2>
            <ul className="sns"> 
                <li>
                    <a href="https://soundcloud.com/user-156586152"><img src={SoundCloud}/></a>
                </li>
                <li>
                    <a href="https://twitter.com/zyprxy"><img src={Tiwtter}/></a>
                </li>
                <li>
                    <a href="#"><img src={Gmail}/></a>
                </li>
            </ul>
        </div>
    )
}