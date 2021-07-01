import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(socialLink => {
            const { id, icon, url } = socialLink
            return (
              <a href={url} key={id} className="social-link">
                {icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright©{year}
          <span>webdev </span>all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
