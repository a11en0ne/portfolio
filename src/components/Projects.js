import React from "react"
import Title from "./Title"
import Project from "./Project"
import { graphql, Link } from "gatsby"

const Projects = ({ projects }) => {
  return (
    <section className="section projects" id="projects">
      <Title title="Featured Projects" />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      <a href="/allen-cv.docx" className="btn center-btn">
        Download CV
      </a>
    </section>
  )
}

export default Projects
