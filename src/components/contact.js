import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


function Contact(props) {
    return <div id="contact">
        <div class="contact-container">
            <h2>Looking to get in touch?</h2>
            <ContactMethod link="https://www.linkedin.com/in/devin-james-curtis/" icon={faLinkedin} text="Find me on LinkedIn" />
            <ContactMethod link="mailto:devincurtisjames@gmail.com" icon={faPaperPlane} text="Or send me an email" />
        </div>
    </div>
}

export default Contact

function ContactMethod(props) {
    return <div class="contact-method">
        <a href={props.link} target="_blank">
            <FontAwesomeIcon icon={props.icon} />
        </a>
            <div class="contact-text"><a href={props.link} target="_blank">{props.text}</a></div>
        
        </div>
}