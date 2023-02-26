import "./style.css"
import Picture from "../../assets/profile.jpg"
import Tiwtter from "../../assets/twitter.png"
import SoundCloud from "../../assets/soundcloud.png"
import Gmail from "../../assets/google.png"

export default function Navbar () {
    return (
        <div className="navbar">
            <a href="/"><img className="pic" src={Picture} alt="ris's picture"/></a>
            <a href="/"><h1>Chris Han</h1></a>
            <a href="/about"><h2>About me</h2></a>
            <h2>News</h2>
            <a href="/contact"><h2>Contact</h2></a>
            <ul className="sns"> 
                <li>
                    <a href="https://soundcloud.com/0xalis" target="_blank"><img src={SoundCloud}/></a>
                </li>
                <li>
                    <a href="https://twitter.com/zyprxy" target="_blank"><img src={Tiwtter}/></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={Gmail}/></a>
                </li>
            </ul>
        </div>
    )
}