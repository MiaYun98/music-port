import {React} from "react"
import "./style.css"

export default function Contact () {
    return (
        <div className="contact">
            <h1>Contact Information </h1>
            {/* should be in a a tag that can direct to the link */}
            <a><p>SoundCloud</p></a>
            <p>Gmail</p>
            <p>Twitter</p>
        </div>
    )
}