import React from 'react'
import "./Style.css"
import logo from "./image/insta.jpg"
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <div className='nav'>
                <div >
                <img src={logo} alt="" className='logo'/>
                </div>
                <div className='btn'>
                <Link to="/"><button className='btnHome'>home</button></Link>
                <Link to="/add"><button className='btnAdd'>add</button></Link>
                </div>
            </div>
        </div>
    )
}
