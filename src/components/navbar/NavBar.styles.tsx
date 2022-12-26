import styled from "styled-components"

export const NavBarContainer = styled.nav`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  & > a {
    text-decoration: none;
    color: #3e5641;
    font-size: 1.5rem;
    margin-left: 20px;
  }

  & > svg {
    margin-right: 30px;
    font-size: 2rem;
    color: #3e5641;
  }
`
