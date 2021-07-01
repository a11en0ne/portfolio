import React, { useEffect, useRef } from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({ toggleSidebar }) => {
  // Fixed navBar start from here
  const navBar = useRef(null)
  const handleScroll = () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.current.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
      navBar.current.classList.add("fixed-nav")
    } else {
      navBar.current.classList.remove("fixed-nav")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Fixed navBar end

  return (
    <nav className="navbar" ref={navBar}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="web dev" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { id, text, url } = link
            return (
              <Link to={url} key={id}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
