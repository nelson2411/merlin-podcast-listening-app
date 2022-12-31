import Layout from "./Layout"
/* 
this is a test to check that the layout component renders children correctly

*/

describe("Layout", () => {
  it("renders children correctly", () => {
    const TestContent = () => <div>Test content</div>
    cy.mount(
      <Layout>
        <TestContent />
      </Layout>
    )
  })
})
