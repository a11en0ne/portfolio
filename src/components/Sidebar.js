import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen && `show-sidebar`}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen && "sidebar-links"}>
          {links.map(link => {
            const { id, text, url } = link
            return (
              <li>
                <Link to={url} key={id}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen && "social-links sidebar-icons"}>
          {socialLinks.map(socialLink => {
            const { id, icon, url } = socialLink
            return (
              <li>
                <a to={url} key={id} className="social-link">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
