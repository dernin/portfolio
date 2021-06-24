import React from "react"

function Footer(props) {
    var d = new Date()
    var year = d.getFullYear()
    return <div class="footer">
        &copy; Devin Curtis {year}. Built with Gatsby.
    </div>
}

export default Footer