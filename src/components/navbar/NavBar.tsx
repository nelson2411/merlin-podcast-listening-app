import React from "react"
import { Link } from "react-router-dom"
import { FaPodcast } from "react-icons/fa"
import { NavBarContainer } from "./NavBar.styles"

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">The Podcaster</Link>
      <FaPodcast />
    </NavBarContainer>
  )
}

export default NavBar
