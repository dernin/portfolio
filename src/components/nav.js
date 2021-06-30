import React from "react"
//import {nav} from "./nav.module.scss"

function Navbar(props) {
    return <nav className='nav justify-content-center' >
        <a className="nav-link" href="#top">Home</a>
        <a className="nav-link" href="#work">Work</a>
        <a className="nav-link" href="#skills">Skills</a>
        <a className="nav-link" href="#contact">Contact</a>
    </nav>
}

export default Navbar