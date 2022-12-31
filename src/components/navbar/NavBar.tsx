import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { FaPodcast } from "react-icons/fa"
import { NavBarContainer } from "./NavBar.styles"

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" data-cy="home-link">
        The Podcaster
      </Link>
      <FaPodcast data-cy="podcast-icon" />
    </NavBarContainer>
  )
}

export default NavBar
