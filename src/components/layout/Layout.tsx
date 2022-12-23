import React from "react"
import NavBar from "../navbar/NavBar"

/* 
The intention here is to create a resusable layout component that can be used in other components
accross the app. 
*/

interface Children {
  children: React.ReactNode
}

const Layout = ({ children }: Children) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
