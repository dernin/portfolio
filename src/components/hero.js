import React, { useRef, useEffect } from "react"
import {hero, portrait} from "./hero.module.scss"
import video from "/static/hero.webm" 

export default function Hero(props) {
    
    return <div id={props.link} class="hero">
        <div class="circle"></div>
        <h1>Reach New Audiences</h1>
        <img class="rounded-circle mx-auto portrait" src="https://gameographypod.com/wp-content/uploads/2020/12/download-1.png" alt="Devin Curtis"></img>
        <div class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nibh venenatis, fringilla ipsum vel, ullamcorper magna. Praesent sit amet ligula purus. Cras maximus venenatis porta. Phasellus a pellentesque orci. Suspendisse felis nibh, vestibulum at efficitur nec, imperdiet eu ligula. Aliquam quis augue metus. Donec semper nisl ut varius auctor.</div>
    </div>
}

/* function Canvas() {

    const canvasRef = useRef(null);

    //draw sine waves, alternating colors, in somewhat random positions going diagnally across the canvas MIGHT BE better to just use CSS

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#00000';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.02)**2, 0, 2*Math.PI);
        ctx.fill();
    }

    const calcSineY = (w, h, f, x) => {
        //x is current x value
        
        return h - h * Math.sin(x * 2 * Math.PI * (f/w));
    }

    const drawSine = (ctx, x) => {
        
    }

    useEffect( () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        let w = canvas.width;
        let h = canvas.height / 2; // amplitude of the wave
        let f = 1; // f/w is frequency fraction

        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
        
    }, [draw])

    return <canvas ref={canvasRef}> </canvas>
} */