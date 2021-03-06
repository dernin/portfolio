import React from "react"
import Image from "./image"
//import * as LottiePlayer from "@lottiefiles/lottie-player"


export default function Hero(props) {

    return <HeroContent props={props} />
}

class HeroContent extends React.Component {

    render() {
        return <div id={this.props.link} className="hero">
        <div className="player-container">
            <lottie-player autoplay preserveAspectRatio="xMaxYMax slice" speed="0.3" loop src='https://assets2.lottiefiles.com/packages/lf20_6sp3dige.json'></lottie-player>
        </div>
        <div className="hero-content">
            <h1>Reach New Audiences</h1>
            <Image src="headshot.png" alt="Devin Curtis" className="mx-auto portrait"/>
            <div className="intro-text">Hi, I'm a full-stack web designer and videographer with a passion for projects that make a difference in people's lives. I specialize in e-learning, short form video, and web technologies. I believe that technology can be a driving force for good and equality in our communities. <a href="#contact">Let's make an impact together.</a> </div>
        </div>
    </div>
    }
}
