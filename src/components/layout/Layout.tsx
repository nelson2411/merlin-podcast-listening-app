/* 
The intention here is to create a resusable layout component that can be used in other components
accross the app. 
*/

import React from "react"

interface Children {
  children: React.ReactNode
}

const Layout = ({ children }: Children) => {
  return <div>{children}</div>
}

export default Layout
