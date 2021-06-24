import React from "react"
//import {nav} from "./nav.module.scss"

function Navbar(props) {
    return <nav class='nav justify-content-center' >
        <a class="nav-link" href="#top">Home</a>
        <a class="nav-link" href="#work">Work</a>
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#contact">Contact</a>
    </nav>
}

export default Navbar