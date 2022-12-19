import "./style.css"
import Picture from "../../assets/profile.jpg"

export default function Navbar () {
    return (
        <div className="navbar">
            <img src={Picture} alt="ris's picture"/>
            <h1>Chris Han</h1>
            <h2>About</h2>
            <h2>Contact</h2>
        </div>
    )
}