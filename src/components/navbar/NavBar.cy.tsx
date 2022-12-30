import NavBar from "./NavBar"
import { mount } from "@cypress/react"
/* 

*/

describe("NavBar", () => {
  it("renders correctly", () => {
    mount(<NavBar />)
    cy.get("[data-cy=home-link]").should("exist")
    cy.get("[data-cy=podcast-icon]").should("exist")
  })
})
