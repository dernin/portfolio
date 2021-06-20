import React from "react"
import {graphql} from "gatsby"
import { siteMetaData } from "../../gatsby-config"

export default function About({data}) {
  console.log(data)
  return (
    <div>
        
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>absolutePath</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.absolutePath}</td>
                <td>{node.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>

    
  )
}

export const query = graphql `
  query {
    allFile {
      edges {
        node {
          id
          absolutePath
          size
        }
      }
    }
  }
`