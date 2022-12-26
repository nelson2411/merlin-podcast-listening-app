import styled from "styled-components"

export const ComponentContainer = styled.form`
  display: flex;
  justify-content: end;
  margin: 20px 30px;
`

export const SearchBarContainer = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  width: 400px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }
`
