import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
