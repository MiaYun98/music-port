import React from 'react'
import "./style.css"

export default function Home() {
  return (
    <div className="home">
      <ul className='music'>
        <li>
          <p>first song</p>
          {/* <div id="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div> */}
        </li>
        <li>
          <p>second song</p>
        </li>
        <li>
          <p>third song</p>
        </li>
        <li>
          <p>forth song</p>
        </li>
        <li>
          <p>fifth song</p>
        </li>
      </ul>
    </div>
  )
}
