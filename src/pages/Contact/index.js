import {React} from "react"
import "./style.css"

export default function Contact () {
    return (
        <div className="contact">
            <h1>Contact Information </h1>
            {/* should be in a a tag that can direct to the link */}
            <a className="titleLink" herf='https://soundcloud.com/0xalis'><p>SoundCloud</p></a>
            <p>Gmail</p>
            <a className="titleLink" herf="https://twitter.com/zyprxy"><p>Twitter</p></a>
        </div>
    )
}