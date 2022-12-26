import React from "react"
import { SearchBarContainer, ComponentContainer } from "./SearchBar.styles"

type Props = {
  onSubmit: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ onSubmit, handleChange }: Props) => {
  return (
    <ComponentContainer>
      <SearchBarContainer
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={onSubmit}
      />
    </ComponentContainer>
  )
}

export default SearchBar
