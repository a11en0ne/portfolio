import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Allen</h1>
            <h4>Front End Web Developer</h4>
            <Link to="#contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(socialLink => {
                const { id, icon, url } = socialLink
                return (
                  <a href={url} key={id} className="social-link">
                    {icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <div className="hero-img">{hero()}</div>
      </section>
    </header>
  )
}

export default Hero

export function hero() {
  return (
    <StaticImage
      src="../assets/images/hero.svg"
      alt="portfolio"
      placeholder="blurred"
    />
  )
}
