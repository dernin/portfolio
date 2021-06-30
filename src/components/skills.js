import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Image from "./image"



export default function Skills() {

    const data = useStaticQuery(
        graphql `
          query {
            allMarkdownRemark(
                filter: {frontmatter: {skill: {glob: "*"}}}
                sort: {fields: frontmatter___order}
            ) {
                edges {
                    node {
                      id
                    frontmatter {
                        src
                        skill
                        cat
                    }
                    }
                }
              }
          }
        `
      )

    let edges = data.allMarkdownRemark.edges
    let webSkills = filterCat(edges, "Web")
    let videoSkills = filterCat(edges, "Video")


    return <div id="skills">
        <div className="header">
            <h2>Skills</h2>
        </div>
        
        <div className="skills-container">
            <div className="sub-category">
                <h2>Web Development & Design</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    {webSkills.map((edge, key) => {
                        return <Skill key={key} src={edge.node.frontmatter.src} skill={edge.node.frontmatter.skill} />
                        })
                    }
                </div>
            </div>
            <div className="sub-category">
                <h2>Video Production</h2>
                <div className="d-flex flex-wrap justify-content-around">
                    {videoSkills.map((edge, key) => {
                        return <Skill key={key} src={edge.node.frontmatter.src} skill={edge.node.frontmatter.skill} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

function filterCat(arr, query) {
    return arr.filter(function(el) {
        return el.node.frontmatter.cat == query
    })
}

function Skill(props) {
    const imgWidth = 100

    return <div className="skill m-5">
        <Image src={props.src} alt={props.skill} width={imgWidth} height={imgWidth} />
        <div className="skilltext">{props.skill}</div>
    </div>
}