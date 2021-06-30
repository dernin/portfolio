import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Image from "./image"
import AriaModal from "react-aria-modal"


export default function Projects() {

    
    const data = useStaticQuery(
      graphql `
        query {
          allMarkdownRemark(filter: {frontmatter: {date: {glob: "*"}}}
          sort: {fields: [frontmatter___date], order: DESC }
          ) {
              edges {
                  node {
                    id
                  frontmatter {
                      title
                      alt
                      src
                      date
                      link
                      cat
                  }
                  excerpt(pruneLength: 90)
                  html
                  }
              }
            }
        }
      `
    )
    
    let edges = data.allMarkdownRemark.edges


    return (<div className="projects-container" id="work">
      <div className="header">
        <h2>Example Work</h2>
      </div>
    
      <ProjectConstructor edges={edges} />

    

  </div>)
    

    
}

class Project extends React.Component {
    constructor(props) {
      super(props)
      this.props = props
      this.state = {
        popped: false,
      }
    }  

    pushPopOut = () => {
      this.setState({
        popped: !this.state.popped
      })
    }

    handleKey = (ev) => {
      if (ev.key === "Enter" && !this.state.popped) {
        this.pushPopOut()
      }
    }

    render() {
      let imgHeight = 270
      return ( 
      <>
        <article tabIndex='0' className="project m-1" onClick={this.pushPopOut} onKeyDown={this.handleKey}>
          <Image src={this.props.src} alt={this.props.alt} height={imgHeight} />
          <div className="project-content p-3">
            <h3>{this.props.head}</h3>
            <div dangerouslySetInnerHTML={{__html: this.props.excerpt}}></div>
          </div>
        </article>
        { this.state.popped &&
          <PopOut project={this.props} click={this.pushPopOut} />
        }
      </> )
    }
    

}

function PopOut(props) {
  let project = props.project

  let showVideo = false
  let createLink = false
  let url

  if (project.link) {
    url = new URL(project.link)
    if(url.hostname === 'player.vimeo.com') {
      showVideo = true
    }
    else {
      createLink = true
    }
  }
  return (
  <AriaModal titleText="Project Details" onExit={props.click} initialFocus=".closePop" className="popOut" >
    <div className="popOutInner">
      <button className="closePop" onClick={props.click}>X</button>
      <div className="popOutContent">
        <h1>{project.head}</h1>
        <div dangerouslySetInnerHTML={{__html: project.html}}></div> 

        
      </div>
      {createLink ? <a href={project.link} rel="noreferrer" target="_blank"> <Image src={project.src} alt={project.alt} /> </a> :
        showVideo ? <iframe title={project.head} src={url} width="700" height="393.75" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> :
        <Image src={project.src} alt={project.alt} /> }
    </div>
  </AriaModal> )
}

class ProjectConstructor extends React.Component {

  // Adapted from https://ibaslogic.com/instant-post-switching-in-a-gatsbyjs-site/

  constructor(props) {
    super(props)
    this.props = props
    this.edges = props.edges
    this.state = {
      items: this.props.edges,
      filteredItems: this.props.edges,
    }
  }

  handleItems(category) {
    if (category === 'All') {
      this.setState({
        filteredItems: [...this.state.items],
      })
    }
    else {
      this.setState({
        filteredItems: [
          ...this.state.items.filter(edge => {
            return edge.node.frontmatter.cat === category
          }),
        ],
      })
    }
  }

  render() {
    return <div className='projects'>
    <div className="sorting-buttons d-flex justify-content-center">
      <div className="btn-group btn-group-toggle" data-toggle="buttons"  role="group" aria-label="Sorting buttons">
        <button type="button" className="btn btn-secondary" onClick={() => this.handleItems('All')}>All</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.handleItems('Web')}>Web</button>
        <button type="button" className="btn btn-secondary" onClick={() => this.handleItems('Video')}>Video</button>
      </div>
    </div>
    <div className="d-flex justify-content-around flex-wrap">
      {this.state.filteredItems.map((edge, key) => {
      return ( 
          <Project key={key} src={edge.node.frontmatter.src} alt={edge.node.frontmatter.alt}
            head={edge.node.frontmatter.title} excerpt={edge.node.excerpt} html={edge.node.html} 
            link={edge.node.frontmatter.link} cat={edge.node.frontmatter.cat} />)
        })
      }
      </div>
    </div>
  }


}



