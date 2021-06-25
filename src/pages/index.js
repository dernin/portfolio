import React from "react"
import Navbar from "../components/nav"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import "@fontsource/barlow"
import "@fontsource/barlow-condensed"
import { Helmet } from "react-helmet"


export default function Home() {
  return (<>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="Devin Curtis | Reach New Audiences"></meta>
        <title>Devin Curtis</title>

      </Helmet>
      <Navbar />
      <Hero link="top" />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </>
  )
}


