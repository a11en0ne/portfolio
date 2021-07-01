import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Seo title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>OOPS IT'S A DEAD END</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
