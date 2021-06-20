import React, {useMemo} from "react"
import {graphql, useStaticQuery} from "gatsby"
import { GatsbyImage, getImage }from "gatsby-plugin-image"
//import PropTypes, { node } from "prop-types"
//import { data } from "jquery"

const Image = ({src, ...rest}) => {
    const data = useStaticQuery(graphql`
        query  {
            images: allFile(filter: {internal: {mediaType: {regex: "/image/"}}}) {
                edges {
                  node {
                    id
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    }
                    relativePath
                    extension
                    publicURL
                  }
                }
              }
            }
        
        `)

        const match = useMemo(
            () => data.images.edges.find(({node}) =>  node.relativePath == src),
            [data, src]
        )

        //console.log(match.node)
        
        if (!match) return null


        
        const image = getImage(match.node)
        //console.log(image)
        
        //const {node: {publicURL, extension} = {} } = match
        
        return <GatsbyImage image={image} {...rest} />

}

export default Image;