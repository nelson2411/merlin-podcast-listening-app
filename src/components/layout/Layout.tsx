import React from "react"
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"
import { LayoutContainer } from "./Layout.styles"

/* 
The intention here is to create a resusable layout component that can be used in other components
accross the app. 
*/

interface Children {
  children: React.ReactNode
}

const Layout = ({ children }: Children) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
