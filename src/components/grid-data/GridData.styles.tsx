import styled from "styled-components"

// Create a grid for the podcasts to be displayed

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  margin: 20px 20px;
`

export const PodcastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 10px 25px;
  padding: 20px 25px;
  background-color: white;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }

  & > a {
    text-decoration: none;
    color: black;
    text-align: center;
  }

  & > h2 {
    margin: 9px 0;
    text-align: center;
  }

  & > h4 {
    margin: 9px 0;
  }
`
