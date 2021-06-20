import React from "react"
import {graphql} from "gatsby"
import Wrapper from '../components/wrapper'
import Navbar from "../components/nav"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import {Link} from "gatsby"
import {StaticImage} from 'gatsby-plugin-image'
import "@fontsource/barlow"
import "@fontsource/barlow-condensed"


export default function Home() {
  return (<div>
      <Navbar />
      <Hero link="top" />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
  )
}


