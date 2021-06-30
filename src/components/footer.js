import React from "react"

function Footer(props) {
    var d = new Date()
    var year = d.getFullYear()
    return <footer className="footer">
        &copy; Devin Curtis {year}. Built with Gatsby.
    </footer>
}

export default Footer