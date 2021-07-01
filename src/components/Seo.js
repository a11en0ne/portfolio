import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`
const SEO = ({ title }) => {
  const { site } = useStaticQuery(query)
  const { author, siteDesc, siteUrl, siteTitle } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta name="title" content={`${title} | ${siteTitle}`} />
      <meta name="description" content={siteDesc} />
      <meta name="author" content={author} />
      <meta name="siteUrl" content={siteUrl} />
    </Helmet>
  )
}

export default SEO
