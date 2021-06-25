import React from "react"

export const onRenderBody = ({setPostBodyComponents}) => {
    setPostBodyComponents([
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    ])
}